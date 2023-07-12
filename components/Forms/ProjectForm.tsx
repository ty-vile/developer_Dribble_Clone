"use client";

import { SessionInterface } from "@/types";
import { ChangeEvent, useState, useRef } from "react";
import Image from "next/image";
import FormField from "./FormField";
import { categoryFilters } from "@/constants";
import CustomMenu from "../CustomMenu";
import CustomButton from "../Buttons/CustomButton";

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

  const imageUploadDivRef = useRef<null | HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    console.log(imageUploadDivRef.current);

    if (!file.type.includes("image")) {
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange("image", result);
    };
  };
  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-col w-full  px-6 pt-6 gap-10 text-lg max-w-5xl mx-auto"
    >
      <div
        ref={imageUploadDivRef}
        className="w-full lg:min-h-[300px] min-h-[200px] relative border-4 flex flex-col items-center justify-center"
      >
        {!form?.image ? (
          <>
            <label htmlFor="poster" className="text-lg font-semibold">
              {!form?.image && "Add a project poster"}
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              required={type === "create"}
              onChange={handleChangeImage}
              className="p-2 text-sm flex flex-col"
            />
          </>
        ) : (
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

      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />

      <div className="mt-10 flex items-start w-full">
        <CustomButton
          title={
            isSubmitting
              ? `${type === "create" ? "Creating" : "Editing"}`
              : `${type === "create" ? "Create" : "Edit"}`
          }
          type="submit"
          leftIcon={isSubmitting ? "" : "/plus.svg"}
          isSubmitting={isSubmitting}
          bgColor="bg-purple-500"
          textColor="text-white"
        />
      </div>
    </form>
  );
}

export default ProjectForm;
