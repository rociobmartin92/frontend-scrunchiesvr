import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectArrayStrings({
  array,
  setColor,
}: {
  array: string[];
  setColor: (color: string) => void;
}) {

  return (
    <Select onValueChange={(value) => setColor(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filtrar por color" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {array.map((item: string) => (
            <SelectItem value={item}> {item} </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
