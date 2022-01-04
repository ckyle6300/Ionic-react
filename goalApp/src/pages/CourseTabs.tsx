import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { list, trophyOutline } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AllGoals from './AllGoals';
import CourseGoals from './CourseGoals';
import Courses from './Courses';
import Filter from './Filter';

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path='/courses' to='/courses/list' exact />
        <Switch>
          <Route exact path='/courses/list'>
            <Courses />
          </Route>
          <Route exact path='/courses/all-goals'>
            <AllGoals />
          </Route>
          <Route exact path='/courses/:cid'>
            <CourseGoals />
          </Route>
        </Switch>
      </IonRouterOutlet>

      <IonTabBar slot='bottom'>
        <IonTabButton tab='a' href='/courses/all-goals'>
          <IonIcon icon={list} />
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab='b' href='/courses/list'>
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
