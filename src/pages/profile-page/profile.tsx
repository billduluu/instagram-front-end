import "./style.css";
import Grid from "@material-ui/core/Grid";
import { PhotoCard } from "../../components/index";
import { ProfileBioCard } from "../../components/index";

const ProfilePage = () => {
  return (
    <Grid container>
      <Grid xs={2} />
      <Grid xs={7}>
        <div className="profile-header">
          <Grid xs={2}>
            <img
              src={
                "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/238676345_3054452144769630_1345288388047184631_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lWIMaM98NrkAX-IehdJ&_nc_ht=scontent.fuln1-1.fna&oh=dc95f9588cbb0ef5aa26e693ef3c298e&oe=617C3B98"
              }
              className="profile-photo"
              alt="user-profile"
            />
          </Grid>
          <Grid xs={6}>
            <ProfileBioCard />
          </Grid>
        </div>
        <PhotoCard />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default ProfilePage;
