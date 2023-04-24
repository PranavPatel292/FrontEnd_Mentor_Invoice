import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { BillFrom } from "./BillFrom";
import { BillTo } from "./BillTo";
import { ListItems } from "./ListItems";

// TODO: define validation for item_list
// TODO: how to differentiate between draft and save buttons
const item_list_schema = yup.object({
  item_name: yup.string().optional(),
  quality: yup.string().optional(),
  price: yup.string().optional(),
});

const formSchema = yup.object({
  bill_from_streetAddress: yup.string().required(),
  bill_from_city: yup.string().required(),
  bill_from_postCode: yup.string().required(),
  bill_from_country: yup.string().required(),
  bill_to_clientName: yup.string().required(),
  bill_to_clientEmail: yup.string().required(),
  bill_to_streetAddress: yup.string().required(),
  bill_to_city: yup.string().required(),
  bill_to_postCode: yup.string().required(),
  bill_to_country: yup.string().required(),
  issueDate: yup.string().required(),
  //paymentTerms: yup.string().required(),
  item_list: yup.array(item_list_schema).optional(),
  projectDescription: yup.string().required(),
});

type FormData = yup.InferType<typeof formSchema>;

export const CreateAndEditInvoice = () => {
  const defaultValues = {
    bill_from_streetAddress: "",
    bill_from_city: "",
    bill_from_postCode: "",
    bill_from_country: "",
    bill_to_clientName: "",
    bill_to_clientEmail: "",
    bill_to_streetAddress: "",
    bill_to_city: "",
    bill_to_postCode: "",
    bill_to_country: "",
    issueDate: "",
    paymentTerms: "",
    item_list: [{ item_name: "", quantity: 0, price: 0 }],
    projectDescription: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: defaultValues,
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "item_list",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [formState, reset]);

  const watchFieldArray = watch("item_list");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  // TODO: convert the any type to their appropriate type in BillFrom and BillTo
  // TODO: width of the modal
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5 rounded-md m-5 p-7 modal-box"
      >
        <BillFrom register={register} errors={errors} />

        <BillTo register={register} errors={errors} />

        <ListItems
          remove={remove}
          data={controlledFields}
          register={register}
          errors={errors}
          append={append}
        />

        <div className="w-full flex justify-end space-x-5 pt-7">
          <input
            type="submit"
            value="Save as Draft"
            className="btn btn-secondary opacity-70"
          />
          <input
            type="submit"
            value="Save & Send"
            className="btn btn-success"
          />
        </div>
      </form>
    </>
  );
};
