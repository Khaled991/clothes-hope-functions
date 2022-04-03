import { toast, TypeOptions } from "react-toastify";
import { getDirectionBasedOnLanguage, isArabic } from "./locale.utils";

export const showToastError = (msg: string, duration?: ToastDuration) =>
  showToast(msg, "error", evaluateDuration(duration ?? "short"));
export const showToastSuccess = (msg: string, duration?: ToastDuration) =>
  showToast(msg, "success", evaluateDuration(duration ?? "short"));

export const showToast = (msg: string, type: TypeOptions, duration: number) =>
  toast(msg, {
    position: `bottom-${getDirectionBasedOnLanguage()}`,
    type,
    style: {
      fontSize: 18,
    },
    autoClose: duration,
    //TODO:doesn't change direction
    rtl: isArabic(),
  });

type ToastDuration = number | "long" | "short";
const evaluateDuration = (duration: ToastDuration): number => {
  switch (duration) {
    case "short":
      return 2000;
    case "medium":
      return 4000;
    case "long":
      return 6000;
    default:
      return duration;
  }
};
