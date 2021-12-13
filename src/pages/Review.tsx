import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Review.css';

const Review: React.FC = () => {
    return (
      <IonPage>
      <IonContent color="light">
        <IonHeader className="ion-padding ion-no-border">
          <IonToolbar color="light">
            <IonTitle size="large">Review</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
            <IonImg src="https://image.freepik.com/free-vector/ingredients-salad-bowl-table-cartoon-illustration_74855-18388.jpg"></IonImg>
            <IonButton className="review">Write a review</IonButton>
        </IonCard>

        <IonCard>
          <IonImg src="https://image.freepik.com/free-vector/delicious-fast-food-pop-art-style_24908-61605.jpg"></IonImg>
          <IonButton className="review">Upload a photo</IonButton>
        </IonCard>

      </IonContent>
      </IonPage>
    );
  };
  
  export default Review;

  