import Button from '../../../components/Button';
import {
  Container,
  FieldName,
  FieldContainer,
  MainInput,
  SecondaryInput,
  SecondaryInputContainer,
  BloodSexContainer,
  BloodContainer,
  SexContainer,
  BloodSexContainerLabel,
  Radio,
  RadioContainer,
} from './UserForm.styled';

const UserForm = () => {
  return (
    <Container>
      <div>
        <FieldContainer>
          <FieldName>Name</FieldName>
          <MainInput type="text" />
        </FieldContainer>
        <FieldContainer>
          <FieldName>Email</FieldName>
          <MainInput type="email" />
        </FieldContainer>
        <SecondaryInputContainer>
          <FieldContainer>
            <FieldName>Height</FieldName>
            <SecondaryInput type="number" />
          </FieldContainer>
          <FieldContainer>
            <FieldName>Current Weight</FieldName>
            <SecondaryInput type="number" />
          </FieldContainer>
          <FieldContainer>
            <FieldName>Desired Weight</FieldName>
            <SecondaryInput type="number" />
          </FieldContainer>
          <FieldContainer>
            <FieldName>Date of birth</FieldName>
            <SecondaryInput type="month" />
          </FieldContainer>
        </SecondaryInputContainer>
      </div>
      <FieldName>Blood</FieldName>
      <BloodSexContainer>
        <div>
          <BloodContainer>
            <RadioContainer>
              <Radio type="radio" id="blood_1" name="blood" value={1} />
              <BloodSexContainerLabel for="blood_1">1</BloodSexContainerLabel>
            </RadioContainer>
            <RadioContainer>
              <Radio type="radio" id="blood_2" name="blood" value={2} />
              <BloodSexContainerLabel for="blood_2">2</BloodSexContainerLabel>
            </RadioContainer>
            <RadioContainer>
              <Radio type="radio" id="blood_3" name="blood" value={3} />
              <BloodSexContainerLabel for="blood_3">3</BloodSexContainerLabel>
            </RadioContainer>
            <RadioContainer>
              <Radio type="radio" id="blood_4" name="blood" value={4} />
              <BloodSexContainerLabel for="blood_4">4</BloodSexContainerLabel>
            </RadioContainer>
          </BloodContainer>
        </div>

        <SexContainer>
          <RadioContainer>
            <Radio type="radio" id="sex_male" name="sex" value="male" />
            <BloodSexContainerLabel for="sex_male">Male</BloodSexContainerLabel>
          </RadioContainer>
          <RadioContainer>
            <Radio type="radio" id="sex_female" name="sex" value="female" />
            <BloodSexContainerLabel for="sex_female">
              Female
            </BloodSexContainerLabel>
          </RadioContainer>
        </SexContainer>
      </BloodSexContainer>
      <div>
        <RadioContainer>
          <Radio type="radio" id="no_activity" name="activity" value={0} />
          <BloodSexContainerLabel for="no_activity">
            Sedentary lifestyle (little or no physical activity)
          </BloodSexContainerLabel>
        </RadioContainer>

        <RadioContainer>
          <Radio type="radio" id="little_activity" name="activity" value={1} />
          <BloodSexContainerLabel for="little_activity">
            Light activity (light exercises/sports 1-3 days per week)
          </BloodSexContainerLabel>
        </RadioContainer>
        <RadioContainer>
          <Radio type="radio" id="normal_activity" name="activity" value={2} />
          <BloodSexContainerLabel for="normal_activity">
            Moderately active (moderate exercises/sports 3-5 days per week)
          </BloodSexContainerLabel>
        </RadioContainer>
        <RadioContainer>
          <Radio type="radio" id="very_activity" name="activity" value={3} />
          <BloodSexContainerLabel for="very_activity">
            Very active (intense exercises/sports 6-7 days per week)
          </BloodSexContainerLabel>
        </RadioContainer>
        <RadioContainer>
          <Radio type="radio" id="extreme_activity" name="activity" value={4} />
          <BloodSexContainerLabel for="extreme_activity">
            Extremely active (very strenuous exercises/sports and physical work)
          </BloodSexContainerLabel>
        </RadioContainer>
      </div>

      <Button>Save</Button>
    </Container>
  );
};

export default UserForm;
