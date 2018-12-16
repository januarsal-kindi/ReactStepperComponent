# react-native-slideshow
A quick and easy slideshow for react native. (Android & iOS)

![GIF](demo1.gif) ![GIF](demo2.gif)

## Installation

```bash
npm install react-stepper-component --save
```

## Usage

```javascript
import Stepper from 'react-stepper-component';

// ...
handlerStepperClick(id){
    //id from Stepper.Content props 'id;
    console.log(id)

}

render() {
  return (
    <Stepper onClick={this.handlerStepperClick}>
        <Stepper.Content id="1" >
            <Stepper.Title>
                1
            </Stepper.Title>
            <Stepper.Detail>
                <Stepper.TitleHeadline >
                    Account Instagram
                </Stepper.TitleHeadline>
                <Stepper.Description>
                    Registartion Instagram
                </Stepper.Description>
            </Stepper.Detail>
        </Stepper.Content>
        <Stepper.Content id="2" active >
            <Stepper.Title>
                2
            </Stepper.Title>
            <Stepper.Detail>
                <Stepper.TitleHeadline>
                    Plan
                </Stepper.TitleHeadline>
                <Stepper.Description>
                    Choose Your Plan
                </Stepper.Description>
            </Stepper.Detail>
        </Stepper.Content>

        <Stepper.Content  disabled>
            <Stepper.Title>
                3
            </Stepper.Title>
            <Stepper.Detail>
                <Stepper.TitleHeadline>
                     Payment
                </Stepper.TitleHeadline>
                <Stepper.Description>
                    Choose Your Plan
                </Stepper.Description>
            </Stepper.Detail>

        </Stepper.Content>
    </Stepper>
  );
}
```

## Props

| Property | Type | isRequired? | Default | Description |
| --- | :---: | :---: | :---: | --- |
| `OnClick` | func | required | - | Callback when content onClick |
| `id` | string | optional | undefined | indicator from container |
| `disabled` | bool | optional | false | disabled item stepper|
| `active` | bool | optional | false | indicator active of item stepper |


## License
MIT