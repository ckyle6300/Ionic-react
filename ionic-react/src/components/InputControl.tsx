import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

const InputControl: React.FC<{
  selectedValue: string;
  onSelectValue: (value: string) => void;
}> = (props) => {
  const inputChangeHandler = (event: CustomEvent) => {
    props.onSelectValue(event.detail.value);
  };

  return (
    <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value='mkg'>
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value='ftlbs'>
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
