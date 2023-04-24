import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { BillFrom } from "./BillFrom";
import { BillTo } from "./BillTo";
import { ListItems } from "./ListItems";

// TODO: define validation for item_list.
// TODO: how to differentiate between draft and save buttons.
// TODO: make sure to do dirty submit when doing update.
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
    item_list: [],
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

  const onSubmit = (
    data: FormData,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    console.log(data);
    const btnType = event.currentTarget.name;
    console.log(btnType);
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
        <div className="overflow-y-scroll flex flex-col space-y-5">
          <BillFrom register={register} errors={errors} />

          <BillTo register={register} errors={errors} />

          <ListItems
            remove={remove}
            data={controlledFields}
            register={register}
            errors={errors}
            append={append}
          />
        </div>

        <div className="flex justify-between ">
          <div className="modal-action m-0">
            <label
              htmlFor="my-modal-4"
              className="btn btn-xs sm:btn-sm md:btn-md"
              onClick={() => reset(defaultValues)}
            >
              Discard
            </label>
          </div>
          <input
            name="draft"
            type="submit"
            value="Save as Draft"
            className="btn btn-xs sm:btn-sm md:btn-md  btn-secondary opacity-80"
          />
          <input
            name="save"
            type="submit"
            value="Save & Send"
            className="btn btn-xs sm:btn-sm md:btn-md  btn-success"
          />
        </div>
      </form>
    </>
  );
};
