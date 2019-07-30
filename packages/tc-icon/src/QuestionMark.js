import React from "react";
import createComponent from "@trend/utils/createComponent";
import createUseHook from "@trend/utils/createUseHook";
import useCreateElement from "@trend/utils/hooks/useCreateElement";
import { useIcon } from "./Icon";
export const useQuestionMark = createUseHook({
  name: "QuestionMark",
  compose: useIcon,
  useProps: (options, htmlProps) => ({
    "aria-label": "icon_QuestionMark",
    viewBox: "0 0 104.188 184",
    ...htmlProps,
    children: useCreateElement(null, null, () => (
      <>
        <title>QuestionMark</title>
        <path d="M52.554 184a25.2 25.2 0 1125.179-25.2A25.218 25.218 0 0152.554 184zm0-42.375A17.179 17.179 0 1069.726 158.8a17.2 17.2 0 00-17.172-17.177zm-8.431-17.466a12.021 12.021 0 01-12.007-12.028V80.943A12.055 12.055 0 0138.17 70.5c12.558-7.185 25.977-17.892 25.977-26.4 0-1.182-.94-2.252-2.792-3.18a21.516 21.516 0 00-9.22-1.832c-6.511 0-12.011 2.295-12.011 5.011v4.009a12.034 12.034 0 01-12.012 12.028H12.096A12.034 12.034 0 01.087 48.113v-3.839c-.164-2.112-.9-17.14 10.054-29.257 9-9.963 23.134-15.014 42-15.014C100.432 0 104.187 33.759 104.187 44.1c0 26.233-19.618 38.167-29.046 43.9l-1.322.807a3.957 3.957 0 00-1.879 3.4v19.66A12.073 12.073 0 0160.123 123.9l-15.8.259c-.067-.002-.136-.002-.2-.002zm8.012-93.083c11.788 0 20.02 5.358 20.02 13.03 0 14.084-18.8 26.945-30.012 33.358a4.02 4.02 0 00-2.019 3.481v31.186a3.979 3.979 0 001.2 2.857 4.1 4.1 0 002.874 1.152l15.8-.258a4.026 4.026 0 003.939-4.009v-19.66a11.925 11.925 0 015.69-10.226l1.361-.831c8.806-5.356 25.2-15.328 25.2-37.05 0-10.849-4.292-36.083-44.043-36.083-16.5 0-28.636 4.164-36.059 12.376-9.2 10.176-8.017 23.178-8 23.308l.02.4v4.009a4.011 4.011 0 004 4.009h16.016a4.011 4.011 0 004-4.009V44.1c-.006-7.668 8.226-13.026 20.013-13.026z" />
      </>
    ))
  })
});
const QuestionMark = createComponent({
  as: "svg",
  useHook: useQuestionMark
});
export default QuestionMark;
