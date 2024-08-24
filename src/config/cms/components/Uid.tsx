import React, { useState } from "react";
import { Path, PrimitiveInputElementProps } from "sanity";
import { Box, Button, Flex, Text, TextInput } from "@sanity/ui";
import { VscCheck, VscCopy } from 'react-icons/vsc'

export default function Uid({
  elementProps,
  path,
}: {
  elementProps: PrimitiveInputElementProps;
  path: Path;
}) {
  const indexOfModule = path.indexOf("modules");
  const moduleKey = (path[indexOfModule + 1] as any)?._key;

  const [checked, setChecked] = useState(false);

  return (
    <Flex gap={1} align="center">
      <Text muted>#</Text>

      <Box flex={1}>
        <TextInput {...elementProps} placeholder={moduleKey} radius={2} />
      </Box>

      <Button
        title="Click to copy"
        mode="ghost"
        icon={checked ? VscCheck : VscCopy}
        disabled={checked}
        onClick={() => {
          navigator.clipboard.writeText("#" + elementProps.value || moduleKey);

          setChecked(true);
          setTimeout(() => setChecked(false), 1000);
        }}
      />
    </Flex>
  );
}
