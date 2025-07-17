import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

interface Props {
  onSubmit: (data: any) => void;
  isPending?: boolean;
  children?: React.ReactNode;
}

const FormSubmit = ({ onSubmit, isPending, children }: Props) => {
  const { handleSubmit } = useFormContext();

  return (
    <Button onPress={handleSubmit(onSubmit)} disabled={isPending}>
      {children ? children : isPending ? "Submitting..." : "Submit"}
    </Button>
  );
};

export default FormSubmit;
