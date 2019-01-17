<template>
  <div class="styleguide">
    <h1>Buttons</h1>
    <div>
    	<CustomButton classNames="btn--lg btn--black-trans" :rounded="false" text="BOUTON LARGE" />
      <CustomButton classNames="btn--lg btn--black-trans" :rounded="true" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--green" :rounded="true" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--green-trans" :rounded="true" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--green-sea-trans" :rounded="false" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--red" :rounded="false" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--light-gray" :rounded="false" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--light-gray" :rounded="true" text="BOUTON LARGE" />
    </div>

    <h1>Forms</h1>
    <div>
      <Checkbox classNames="checkbox--red" :checked="false"/>
      <Checkbox classNames="checkbox--red" :checked="true"/>

      <RadioButton classNames="radio--red" :checked="false"/>
      <RadioButton classNames="radio--red" :checked="true"/>

      <CustomInput placeholder="input focus" />
      <label class="b">LABEL</label>
      <CustomInput placeholder="input focus" />
      <SelectBox :options="[{id: 1, label: 'option 1'}, {id: 2, label: 'option 2'}]" />
    </div>

    <h1>Card</h1>
    <div style="width: 50%; margin: 0 auto;">
      <Card title="Modal title">
        <template slot="body">
          <p>Paragraphs - poppins regular 15px
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </template>
        <template slot="footer">
          <CustomButton classNames="btn--lg btn--black-trans" :rounded="false" text="BOUTON LARGE" />
          <CustomButton classNames="btn--lg btn--green" :rounded="false" text="BOUTON LARGE" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import SelectBox from '@/components/SelectBox';
import Checkbox from '@/components/Checkbox';
import RadioButton from '@/components/RadioButton';
import Card from '@/components/Card';
export default {
  name: 'styleguide',
  components: {
  	CustomButton,
    CustomInput,
    SelectBox,
    Checkbox,
    RadioButton,
    Card
  }
}
</script>
