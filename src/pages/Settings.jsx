import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../UI/Heading";
import Row from "../UI/Row";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
