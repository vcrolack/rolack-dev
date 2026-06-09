import React from "react";

export interface Role {
  id: string;
  title: string;
  start: string;
  end?: string;
  description: (string | React.ReactNode)[];
  stack?: string[];
}
