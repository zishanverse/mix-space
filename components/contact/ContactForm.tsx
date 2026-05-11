"use client";

import { useState, useRef, useEffect } from "react";

interface BaseInputProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
}

function FormFieldWrapper({ label, required, isFocused, children }: any) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-2 mb-2 relative h-5">
        {isFocused && (
          <div className="w-[6px] h-[6px] bg-white rounded-full animate-pulse" />
        )}
        <span className={`text-[13px] font-medium text-white transition-all duration-300 ${isFocused ? "" : "pl-0"}`}>
          {label} {required && <span className="text-[#888]">*</span>}
        </span>
      </div>
      {children}
    </div>
  );
}

export function TextInput({ label, required, placeholder, type = "text" }: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormFieldWrapper label={label} required={required} isFocused={isFocused}>
      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="bg-transparent w-full text-base text-white border-b border-white/20 py-3 focus:border-white/70 transition-colors outline-none placeholder:text-[#444] font-normal"
      />
    </FormFieldWrapper>
  );
}

export function TextArea({ label, required, placeholder }: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormFieldWrapper label={label} required={required} isFocused={isFocused}>
      <div className="relative w-full">
        <textarea
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={4}
          className="bg-transparent w-full text-base text-white border-b border-white/20 py-3 focus:border-white/70 transition-colors outline-none placeholder:text-[#444] font-normal resize-none min-h-[120px]"
        />
        <div className="absolute bottom-3 right-0 pointer-events-none text-[#666] select-none">
          ↗
        </div>
      </div>
    </FormFieldWrapper>
  );
}

export function CustomSelect({ label, required, options, placeholder }: BaseInputProps & { options: string[] }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <FormFieldWrapper label={label} required={required} isFocused={isFocused || isOpen}>
      <div ref={containerRef} className="relative w-full">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
            setIsFocused(true);
          }}
          className={`flex items-center justify-between w-full text-base border-b py-3 cursor-pointer transition-colors ${
            isOpen || isFocused ? "border-white/70" : "border-white/20"
          }`}
        >
          <span className={selectedValue ? "text-white" : "text-[#444]"}>
            {selectedValue || placeholder || "Select option"}
          </span>
          <svg
            className={`w-3 h-3 text-[#666] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full z-50 mt-1 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelectedValue(option);
                  setIsOpen(false);
                  setIsFocused(false);
                }}
                className="px-4 py-3 text-[15px] text-white/80 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </FormFieldWrapper>
  );
}

const FormDivider = () => <div className="h-[1px] w-full bg-white/8 my-2" />;

export function ProjectEnquiryForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput label="Name" required placeholder="John Smith" />
        <TextInput label="Email" type="email" required placeholder="Enter your email" />
      </div>
      <FormDivider />
      
      <CustomSelect
        label="Reason to contact?"
        required
        placeholder="Select a reason"
        options={["New Project", "Partnership", "Careers", "General Enquiry", "Other"]}
      />
      <FormDivider />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput label="Company name" required placeholder="Enter your company" />
        <CustomSelect 
          label="What stage is your company?" 
          required 
          placeholder="Select stage"
          options={["Pre-Seed", "Seed", "Series A", "Series B+", "Established", "Other"]} 
        />
      </div>
      <FormDivider />
      
      <TextInput label="How did you hear about us?" required placeholder="Enter your response" />
      <FormDivider />
      
      <TextArea label="Message" placeholder="Leave a message" />
      
      <div className="pt-4">
        <button
          type="submit"
          className="rounded-full bg-[#2a2a2a] text-white text-base font-medium px-9 py-3.5 border border-white/15 hover:bg-brand hover:border-brand transition-all duration-300 w-fit cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export function MinimalForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput label="Name" required placeholder="John Smith" />
        <TextInput label="Email" type="email" required placeholder="Enter your email" />
      </div>
      <FormDivider />
      <TextArea label="Message" placeholder="Leave a message" />
      <div className="pt-4">
        <button
          type="submit"
          className="rounded-full bg-[#2a2a2a] text-white text-base font-medium px-9 py-3.5 border border-white/15 hover:bg-brand hover:border-brand transition-all duration-300 w-fit cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
