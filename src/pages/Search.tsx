import { IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Search.css';

export const ATTRACTIONS_DATA = [
  {nama: 'Monas', review: '190', jarak: '20mi', Type: 'National monument', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Merdeka_Square_Monas_02.jpg'},
  {nama: 'Ragusa Es Italia', review: '136', jarak: '10mi', Type: 'Restaurant', src: 'https://mardianiani.files.wordpress.com/2013/05/p1052598.jpg'},
  {nama: 'Grand Indonesia', review: '357', jarak: '9.6mi', Type: 'Shopping Malls', src: 'https://yukk.co.id/blog/wp-content/uploads/2017/10/Grand-Indonesia-Shopping-Town-Foto-flickr.com_.jpg'}
]

export const CAFE_DATA = [
  {nama: 'Union', review: '86', jarak: '8.3mi', Type: 'Cafes', src: 'https://www.centralparkjakarta.com/wp-content/uploads/2020/01/Union-Photo.jpg'},
  {nama: 'Monsieur Spoom', review: '34', jarak: '5.8mi', Type: 'Cafes', src: 'https://anakjajan.files.wordpress.com/2021/05/img_7882.jpg'},
  {nama: 'Bake a Boo', review: '63', jarak: '6.2mi', Type: 'Cafes', src: 'https://content3.jdmagicbox.com/comp/delhi/r1/011pxx11.xx11.180205190038.k1r1/catalogue/bake-a-boo-delhi-1ezdwynsg6.jpg'}
]

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="light">
      <IonHeader class="ion-padding ion-no-border">
        <IonToolbar color="light">
          <IonTitle size="large">Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonSearchbar className="ion-padding" placeholder="Where to?"></IonSearchbar>

      <IonGrid className="ion-padding">
        <IonRow>
          <IonCol size="8">
            <h4>Attactions nearby</h4>
          </IonCol>
          <IonCol size="4">
            <h4 className="kanan"> See all </h4>
          </IonCol>
          {ATTRACTIONS_DATA.map(attraction => (
            
              <IonList>
                <IonItem color="light">
                  <IonCol>
                    <IonImg src={attraction.src} />
                  </IonCol>
                  <IonCol size="6">
                    <IonRow>
                      {attraction.nama}
                    </IonRow>
                    <IonRow>
                      {attraction.review}
                    </IonRow>
                    <IonRow>
                      {attraction.Type}
                    </IonRow>
                  </IonCol>

                  <IonCol className="kanan" size="small">
                    {attraction.jarak}
                  </IonCol>
                </IonItem>
              </IonList>
          ))}
        </IonRow>

        <IonRow>
        <IonCol size="8">
            <h4>Cafes nearby</h4>
          </IonCol>
          <IonCol size="4">
            <h4 className="kanan"> See all </h4>
          </IonCol>

          {CAFE_DATA.map(cafe => (
            <IonList>
              <IonItem color="light">
                <IonCol>
                  <IonImg src={cafe.src} />
                </IonCol>
                <IonCol size="6">
                  <IonRow>
                    {cafe.nama}
                  </IonRow>
                  <IonRow>
                    {cafe.review}
                  </IonRow>
                  <IonRow>
                    {cafe.Type}
                  </IonRow>
                </IonCol>

                <IonCol className="kanan" size="small">
                  {cafe.jarak}
                </IonCol>
              </IonItem>
            </IonList>
        ))}
        </IonRow>

        <IonRow>
          <IonCol>
            <h4>Destinations travelers love</h4>
          </IonCol>
        </IonRow>
       
        <IonRow>
            <IonCol size="6">
              <IonCard className="nyc">
              <IonCardTitle>
                New York City
                </IonCardTitle>
              </IonCard>
            </IonCol>
            <IonCol size="6">
            <IonCard className="sg">
              <IonCardTitle>
                Singapore
                </IonCardTitle>
              </IonCard>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol size="6">
            <IonCard className="paris">
              <IonCardTitle>
                Paris
                </IonCardTitle>
              </IonCard>
            </IonCol>
            <IonCol size="6">
            <IonCard className="rome">
              <IonCardTitle>
                Rome
                </IonCardTitle>
              </IonCard>
            </IonCol>
        </IonRow>

      </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Search;
