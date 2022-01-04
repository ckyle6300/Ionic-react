import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

export const COURSE_DATA = [
  { id: 'c1', title: 'Ionic + React - The Practical Guide' },
  { id: 'c2', title: 'React.js - The Practical Guide' },
  { id: 'c3', title: 'JavaScript - The Practical Guide' },
];

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course, i) => (
            <IonRow key={course.id}>
              <IonCol sizeSm='6' offsetSm='3'>
                <IonCard className='ion-text-center'>
                  <IonCardContent>
                    <h2>{course.title}</h2>
                    <IonButton routerLink={`/courses/${course.id}`}>
                      View Course Goals
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
