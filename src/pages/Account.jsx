import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm.jsx";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm.jsx";

function Account() {
    return (
        <>
            <Heading as="h1">Update your account</Heading>

            <Row>
                <Heading as="h3">Update user data</Heading>
                <UpdateUserDataForm />
            </Row>

            <Row>
                <Heading as="h3">Update password</Heading>
                <UpdatePasswordForm />
            </Row>
        </>
    );
}

export default Account;
