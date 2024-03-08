"use client";
import { useRef, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LanguageSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { languageAction } from "@/actions/languages.action";

const FormLanguages = () => {
  const ref = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof LanguageSchema>>({
    resolver: zodResolver(LanguageSchema),
    defaultValues: {
      name: "",
      stars: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof LanguageSchema>) => {
    startTransition(() => {
      languageAction(data);
    });
  };
  return (
    <div className="flex items-center flex-col w-full gap-x-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex justify-center items-center flex-col"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Insira a Linguagem"
                      type="text"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-red-100" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stars"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="0"
                      type="number"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-red-100" />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Button
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormLanguages;
