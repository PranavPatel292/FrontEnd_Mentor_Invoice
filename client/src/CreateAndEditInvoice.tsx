import { yupResolver } from "@hookform/resolvers/yup";
import { MouseEventHandler, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { BillFrom } from "./BillFrom";
import { BillTo } from "./BillTo";
import { ListItems } from "./ListItems";

// TODO: make sure to do dirty submit when doing update.

const items_schema = yup.object({
  name: yup.string().optional(),
  quantity: yup.string().optional(),
  price: yup.string().optional(),
});

const formSchema = yup.object({
  billFromStreetAddress: yup.string().required(),
  billFromCity: yup.string().required(),
  billFromPostCode: yup.string().required(),
  billFromCountry: yup.string().required(),
  billToClientName: yup.string().required(),
  billToClientEmail: yup.string().required(),
  billToStreetAddress: yup.string().required(),
  billToCity: yup.string().required(),
  billToPostCode: yup.string().required(),
  billToCountry: yup.string().required(),
  invoiceDate: yup.string().required(),
  paymentTerms: yup.string().required(),
  items: yup.array(items_schema).optional(),
  projectDescription: yup.string().required(),
});

type FormData = yup.InferType<typeof formSchema>;

export const CreateAndEditInvoice = () => {
  const defaultValues = {
    billFromStreetAddress: "",
    billFromCity: "",
    billFromPostCode: "",
    billFromCountry: "",
    billToClientName: "",
    billToClientEmail: "",
    billToStreetAddress: "",
    billToCity: "",
    billToPostCode: "",
    billToCountry: "",
    invoiceDate: "",
    paymentTerms: "",
    items: [],
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
    name: "items",
  });

  const handleDraft: MouseEventHandler<HTMLButtonElement> = () => {
    // handle Draft button click
    const data = { ...watch() };
    console.log(data, "Hello Draft");
  };

  const handleSaveSend: MouseEventHandler<HTMLButtonElement> = () => {
    // handle Save & Send button click
    const data = { ...watch() };
    console.log(data, "Hello Save");
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [formState, reset]);

  const watchFieldArray = watch("items");
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
      <form className="flex flex-col space-y-5 rounded-md m-5 p-7 modal-box">
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
          <button
            type="button"
            onClick={handleDraft}
            value="Save as Draft"
            className="btn btn-xs sm:btn-sm md:btn-md  btn-secondary opacity-80"
          >
            Save As Draft
          </button>
          <button
            type="button"
            onClick={handleSaveSend}
            value="Save & Send"
            className="btn btn-xs sm:btn-sm md:btn-md  btn-success"
          >
            Save & Send
          </button>
        </div>
      </form>
    </>
  );
};
