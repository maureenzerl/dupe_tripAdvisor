import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import { bedOutline, ticketOutline, restaurantOutline, chatboxOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const slideOpts =
  {
    initialSlide : 0,
    slidesPerView: 2.5,
    spaceBetween: 50,
    slideOffsetBefore: 0,
  };

  return (
    <IonPage>
      <IonContent color="primary">
      <IonHeader className="ion-no-border ion-padding">
        <IonToolbar color="primary">
          <IonTitle size="large">Explore</IonTitle>
          <IonAvatar slot="end">
            <img src="https://i.pinimg.com/474x/d8/4e/20/d84e207dbc9be0e61361451da96fce18.jpg" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>

        <IonGrid>
        <IonSlides options={slideOpts} className="ion-padding">
          <IonSlide>
            <IonButton color="light" shape="round" >
              <IonIcon icon={bedOutline} />
              Hotels
            </IonButton>
          </IonSlide>

          <IonSlide>
            <IonButton color="light" shape="round">
              <IonIcon icon={ticketOutline} />
              Things to do
            </IonButton>
          </IonSlide>

          <IonSlide>
            <IonButton color="light" shape="round">
              <IonIcon icon={restaurantOutline} />
              Restaurant
            </IonButton>
          </IonSlide>

          <IonSlide>
            <IonButton color="light" shape="round">
              <IonIcon icon={chatboxOutline} />
              Forums
            </IonButton>
          </IonSlide>
        </IonSlides>
        </IonGrid>
        
        <IonRow>
          <img src="https://image.freepik.com/free-vector/summer-vacation-background_23-2148967121.jpg" />
        </IonRow>

        <IonCard className="disc">
          <IonCardContent>
            <IonCardTitle> Discover more in Tangerang</IonCardTitle>
            <IonButton fill="clear">Keep exploring</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard className="foto2">
          <IonCardContent>
            <IonCardTitle>Goodbye to crushing heat and crushing crowds</IonCardTitle>
            <IonCardSubtitle> Why fall is the best time to visit our national parks </IonCardSubtitle>
            <IonButton color="light">Get the intel</IonButton>
          </IonCardContent>
        </IonCard>

        <IonRow class="ion-padding">
          <h2>Small batch stays</h2>
          Cool cities, cooler boutique hotels
        </IonRow>

        <IonSlides>
          <IonSlide>
          <IonCard className="kartu1">
              <IonCardTitle>
                Austin
                </IonCardTitle>
              </IonCard>
          </IonSlide>
          <IonSlide>
          <IonCard className="kartu2">
              <IonCardTitle>
                  Nashville
                </IonCardTitle>
              </IonCard>
          </IonSlide>
          <IonSlide>
          <IonCard className="kartu3">
              <IonCardTitle>
                New York City
                </IonCardTitle>
              </IonCard>
          </IonSlide>
          <IonSlide>
          <IonCard className="kartu4">
              <IonCardTitle>
                  Washington DC
                </IonCardTitle>
              </IonCard>
          </IonSlide>
        </IonSlides>

        <IonCard className="foto3">
          <IonCardContent>
            <IonCardTitle>Explore Las Vegas, fork first</IonCardTitle>
            <IonCardSubtitle>Our guide to the top celebrity chef restaurant in vegas</IonCardSubtitle>
            <IonButton color="light">Read Guide</IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
