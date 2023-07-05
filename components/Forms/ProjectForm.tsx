"use client";

import { SessionInterface } from "@/types";
import { ChangeEvent } from "react";
import Image from "next/image";
import FormField from "./FormField";

type ProjectFormProps = {
  type: string;
  session: SessionInterface;
};

const form = {
  image: "",
  title: "",
};

function ProjectForm({ type, session }: ProjectFormProps) {
  const handleSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleStateChange = (fieldName: string, value: string) => {};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full ">
      <div className="w-full border-4 h-40 flex items-center justify-center">
        <label htmlFor="poster">{!form?.image && "Add a project poster"}</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          required={type === "create"}
          onChange={handleChangeImage}
          className=""
        />
        {form?.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="Project poster"
            fill
          />
        )}
      </div>
      <FormField
        title="Title"
        state={form.title}
        placeholder="Project Name"
        setState={(value) => handleStateChange("title", value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Project Name"
        setState={(value) => handleStateChange("title", value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Project Name"
        setState={(value) => handleStateChange("title", value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Project Name"
        setState={(value) => handleStateChange("title", value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Project Name"
        setState={(value) => handleStateChange("title", value)}
      />
    </form>
  );
}

export default ProjectForm;
