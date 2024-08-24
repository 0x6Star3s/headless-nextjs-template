// "use client"
import { useState } from "react";
import { defineType } from "sanity";
import { Box, Button, Flex, Text, TextInput } from "@sanity/ui";
import { VscCheck, VscCopy } from "react-icons/vsc";
import Uid from "../../components/test/Uid";

export default defineType({
  name: "uid",
  title: "Unique Identifier",
  description: "Used for anchor/jump links (HTML `id` attribute).",
  type: "string",
  validation: (Rule) =>
    Rule.regex(/^[a-zA-Z0-9-]+$/g).error(
      "Must not contain spaces or special characters"
    ),
  components: {
    input: (props) => <Uid {...props} />,
  },
});
