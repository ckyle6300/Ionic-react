import React from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';
import { COURSE_DATA } from './Courses';
import { create, trash, addOutline } from 'ionicons/icons';
import { isPlatform } from '@ionic/core';

const CourseGoals: React.FC = () => {
  const courseId = useParams<{ cid: string }>().cid;

  const course = COURSE_DATA.find((c) => c.id == courseId);

  const deleteItemHandler = () => {
    console.log('deleted');
  };

  const startEditGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log('edited');
  };

  const addGoalHandler = () => {
    console.log('start goal');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/courses/list' />
          </IonButtons>
          <IonTitle>{course ? course.title : 'No course found'}</IonTitle>
          {!isPlatform('android') && (
            <IonButtons slot='end'>
              <IonButton onClick={addGoalHandler}>
                <IonIcon slot='icon-only' icon={addOutline} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {course && (
          <IonList>
            {course.goals.map((goal) => (
              <IonItemSliding key={goal.id}>
                <IonItemOptions side='start'>
                  <IonItemOption onClick={deleteItemHandler} color='danger'>
                    <IonIcon slot='icon-only' icon={trash} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem lines='full'>
                  <IonLabel>{goal.text}</IonLabel>
                </IonItem>
                <IonItemOptions side='end'>
                  <IonItemOption onClick={startEditGoalHandler}>
                    <IonIcon slot='icon-only' icon={create} />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        )}
        {isPlatform('android') && (
          <IonFab horizontal='end' vertical='bottom' slot='fixed'>
            <IonFabButton color='secondary' onClick={addGoalHandler}>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
