import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';
import { COURSE_DATA } from './Courses';

const CourseGoals: React.FC = () => {
  const courseId = useParams<{ cid: string }>().cid;

  const course = COURSE_DATA.find((c) => c.id == courseId);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>{course ? course.title : 'No course found'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>this works --course Goals page</h2>
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
