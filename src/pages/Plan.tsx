import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import { documentOutline, heart, locationOutline, personAddOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { useState } from 'react';
import './Plan.css';

const Plan: React.FC = () => {
  const [select, setSelect] = useState<'trips' | 'saves' | 'bookings'>('trips');
  const selectSelectHandler = (event: CustomEvent) => 
  {
    setSelect(event.detail.value)
  }
  return (
    <IonPage>
       <IonContent fullscreen color="light">
      <IonHeader class="ion-padding ion-no-border">
        <IonToolbar color="light">
          <IonTitle size="large">Plan</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonGrid>
        <IonRow>
          <IonSegment className="custom-icon" onIonChange={selectSelectHandler}>
              <IonSegmentButton className="segment-b" value="trips">
                Trips
              </IonSegmentButton>
              <IonSegmentButton className="segment-b" value="saves">
                Saves
              </IonSegmentButton>
              <IonSegmentButton className="segment-b" value="bookings">
                Bookings
              </IonSegmentButton>
          </IonSegment>
        </IonRow>

        {/* trips */}
        {select === 'trips' ?
          <IonGrid>
            <IonRow className="ion-padding">
              <IonCol size="2">
                <IonIcon icon={heart}></IonIcon>
              </IonCol>
              <IonCol size="10">
                Save places you'd like to visit
              </IonCol>
            </IonRow>

            <IonRow className="ion-padding">
              <IonCol size="2">
                <IonIcon icon={locationOutline}></IonIcon>
              </IonCol>
              <IonCol size="10">
                See your saves on a map
              </IonCol>
            </IonRow>

            <IonRow className="ion-padding">
              <IonCol size="2">
                <IonIcon icon={documentOutline}></IonIcon>
              </IonCol>
              <IonCol size="10">
                Keep track of notes, links, and more
              </IonCol>
            </IonRow>

            <IonRow className="ion-padding">
              <IonCol size="2">
                <IonIcon icon={personAddOutline}></IonIcon>
              </IonCol>
              <IonCol size="10">
                Share and collaborate on your plans
              </IonCol>
            </IonRow>

            <IonRow className="ion-padding">
              Trip name
              <IonSearchbar className="searchbar" placeholder="Ex: Weekend in NYC"></IonSearchbar>
              <IonCol size="12">
                <IonButton expand="block" color="dark" className="button">Create Trip</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid> 
          : ''}

        {/* saves */}
        {select === 'saves' ?
          <IonGrid>
            <IonRow >
              <IonCol className="save">
                <h4>No saves yet</h4>
                <p>Places you save will appear here</p>
              </IonCol>
            </IonRow>
          </IonGrid> 
          : ''}

        {/* bookings */}
        {select === 'bookings' ?
          <IonGrid>
            <IonRow className="ion-padding">
              <IonCol size="12">
              <IonButton expand="block" color="dark" className="button">View my bookings</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        : ''}

     </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Plan;

