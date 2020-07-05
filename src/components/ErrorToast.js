import {CustomToast} from "../ui";

function ErrorToast() {
    return CustomToast('دربرقراری ارتباط با سرور به مشکل خوردید! لطفا مجددا تلاش کنید.', 5000, "danger")
}
export default ErrorToast;
