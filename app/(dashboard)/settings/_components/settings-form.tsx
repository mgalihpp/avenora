"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  type ChangePasswordInput,
  changePasswordSchema,
  type UpdateProfileInput,
  updateProfileSchema,
} from "@/features/auth/lib/schemas";
import { api } from "@/lib/trpc/client";

export function SettingsForm() {
  const utils = api.useUtils();
  const { data: me } = api.auth.me.useQuery();

  const updateProfile = api.auth.updateProfile.useMutation({
    onSuccess: () => utils.auth.me.invalidate(),
  });
  const changePassword = api.auth.changePassword.useMutation();

  const [isPendingProfile, startProfile] = useTransition();
  const [isPendingPassword, startPassword] = useTransition();

  const profileForm = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { name: "" },
  });
  const passwordForm = useForm<ChangePasswordInput>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: { currentPassword: "", newPassword: "" },
  });

  useEffect(() => {
    if (me?.user.name) profileForm.setValue("name", me.user.name);
  }, [me?.user.name, profileForm]);

  function onUpdateProfile(data: UpdateProfileInput) {
    startProfile(() => updateProfile.mutate(data));
  }

  function onChangePassword(data: ChangePasswordInput) {
    startPassword(() => changePassword.mutate(data));
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your display name.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...profileForm}>
            <form
              onSubmit={profileForm.handleSubmit(onUpdateProfile)}
              className="space-y-4"
            >
              <FormField
                control={profileForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isPendingProfile}
                className="mt-4"
              >
                {isPendingProfile ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Saving…
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Change your account password.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...passwordForm}>
            <form
              onSubmit={passwordForm.handleSubmit(onChangePassword)}
              className="space-y-4"
            >
              <FormField
                control={passwordForm.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isPendingPassword}
                className="mt-4"
              >
                {isPendingPassword ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Changing…
                  </>
                ) : (
                  "Change password"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
