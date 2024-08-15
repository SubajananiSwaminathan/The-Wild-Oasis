import { useState } from "react";

import Button from "../../UI/Button";
import FileInput from "../../UI/FileInput";
import Form from "../../UI/Form";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";

import { useUpdateUser } from "./useUpdateUser";
import { useUser } from "./useUser";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { full_name: current_full_name },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [full_name, set_full_name] = useState(current_full_name);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!full_name) return;
    updateUser(
      { full_name, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          event.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    set_full_name(current_full_name);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={full_name}
          onChange={(event) => set_full_name(event.target.value)}
          id="full_name"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(event) => setAvatar(event.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
