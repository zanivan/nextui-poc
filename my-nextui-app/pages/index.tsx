import React from "react";
import { extendVariants, Button } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";

export const MuiButton = extendVariants(Button, {
  variants: {
    variant: {
      solid: "",
      bordered: "",
    },
    size: {
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-lg",
    },
  },
  defaultVariants: {
    color: "primary",
    variant: "solid",
    size: "md",
    disableAnimation: "true",
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "solid",
      class:
        "bg-[#0073E6] bg-gradient-to-b from-[hsla(210, 100%, 60%, 0.2)] to-[hsla(210, 100%, 42%, 0.2)] shadow-[inset_0_2px_0_hsla(210,100%,60%,1),inset_0_-2px_0_hsla(210,100%,38%,1)] [text-shadow:_0_1px_1px_rgb(0_0_0_/_60%)] font-semibold text-white hover:shadow-none hover:bg-[#0061C2]",
    },
    {
      color: "primary",
      variant: "bordered",
      class:
        "border bg-[#EBF5FF]/20 dark:bg-[#003A75]/20 border-[#CCE5FF] dark:border-[#003A75]/70 shadow-[inset_0_2px_0_hsla(210,100%,96%,0.8),inset_0_-2px_0_hsla(210,100%,90%,0.4)] dark:shadow-[inset_0_2px_0_hsla(210,100%,23%,0.2),inset_0_-2px_0_hsla(210,0%,0%,0.9)] text-[#006BD6] dark:text-[#99CCFF] font-semibold hover:bg-[#EBF5FF] dark:hover:bg-[#003A75] hover:border-[#99CCFF] dark:hover:border-[#0061C2] hover:shadow-none dark:hover:shadow-none",
    },
    {
      color: "primary",
      variant: "light",
      class:
        "font-semibold text-[#006BD6] dark:text-[#66B2FF] hover:bg-[#EAEDF1] dark:hover:bg-[#1F262E]",
    },
  ],
});

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <ThemeSwitch />
      Default button
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
        <Button isLoading>Loading</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
      Extending theme
      <div className="mui flex flex-wrap gap-4 items-center">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
      </div>
      Using custom variants
      <div className="flex flex-wrap gap-4 items-center">
        <MuiButton color="primary" variant="solid">
          Solid
        </MuiButton>
        <MuiButton color="primary" variant="bordered">
          Bordered
        </MuiButton>
        <MuiButton color="primary" variant="light">
          Light
        </MuiButton>
      </div>
    </main>
  );
}
