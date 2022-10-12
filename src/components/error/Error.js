import React from "react";

export function Error({ error }) {
  return <p className="mt-1 alert alert-danger error">{error}</p>;
}
