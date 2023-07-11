"use client";

import { SessionInterface } from "@/types";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import FormField from "./FormField";
import { categoryFilters } from "@/constants";
import CustomMenu from "../CustomMenu";

type ProjectFormProps = {
  type: string;
  session: SessionInterface;
};

function ProjectForm({ type, session }: ProjectFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    liveSiteUrl: "",
    githubUrl: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({ ...prevState, [fieldName]: value }));
  };

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
        title="Description"
        state={form.description}
        placeholder="Project Description"
        setState={(value) => handleStateChange("description", value)}
      />
      <FormField
        type="url"
        title="Website URL"
        state={form.liveSiteUrl}
        placeholder="Project Name"
        setState={(value) => handleStateChange("liveSiteUrl", value)}
      />
      <FormField
        type="url"
        title="Github URL"
        state={form.githubUrl}
        placeholder="Project Name"
        setState={(value) => handleStateChange("githubUrl", value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Project Name"
        setState={(value) => handleStateChange("title", value)}
      />

      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />

      <div className="flex items-start w-full">
        <button>Create</button>
      </div>
    </form>
  );
}

export default ProjectForm;
