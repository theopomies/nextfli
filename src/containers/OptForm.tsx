import { OptForm } from "../components";
import { FormEventHandler, useState } from "react";

export function OptFormContainer({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <OptForm onSubmit={submitHandler}>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
      <OptForm.Input id={id} placeholder="Email address" />
      <OptForm.Button loading={loading}>
        <p>Get Started</p>
      </OptForm.Button>
    </OptForm>
  );
}
