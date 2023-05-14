import Layout from '../../components/Layout';
import { Area } from './styles';

export default function HorseFeedCal() {
  return (
    <Layout>
      <Area>
        <div className="horse-page-feed">
          <div className="container">
            <h1>CALCULATE YOUR HORSE’S FEED NEEDS</h1>

            <p>
              With the Purina Feed Calculator, you can ensure your horse is
              getting the correct amount of feed based on their lifestyle, body
              weight and forage intake.
            </p>

            <p>
              This tool is meant to be a guideline and uses averages and
              estimates for horse metabolism, forage quality, and intensity of
              workload. All of these factors can affect the feeding
              recommendations for an individual horse.
            </p>

            <div className="info-horse-list">
              <div className="info-horse-item">
                <h2>Lifestyle</h2>
                <p>
                  Choose the lifestyle that best describes your horse currently.
                  Then select the level or lifestage.
                </p>
                <h3>Lifestyle</h3>
                <select name="LifeStyles">
                  <option value="0" data-description="">
                    Select Lifestyle
                  </option>
                  <option
                    value="2"
                    data-description="Active Pleasure/Maintenance"
                  >
                    Active Pleasure/Maintenance
                  </option>
                  <option value="6" data-description="Broodmare">
                    Broodmare
                  </option>
                  <option value="5" data-description="Growing Weanling">
                    Growing Weanling
                  </option>
                  <option value="3" data-description="Growing Yearling">
                    Growing Yearling
                  </option>
                  <option value="1" data-description="Performance">
                    Performance
                  </option>
                  <option value="4" data-description="Breeding Stallion">
                    Breeding Stallion
                  </option>
                </select>
                <h3>Level</h3>
                <select
                  id="activitylevel"
                  name="ActivityLevel"
                  aria-invalid="false"
                >
                  <option value="0">Select Level</option>
                  <option value="22" data-description="Minimum">
                    Minimum
                  </option>
                  <option value="1" data-description="Average">
                    Average
                  </option>
                  <option value="9" data-description="Elevated">
                    Elevated
                  </option>
                </select>
              </div>
              <div className="info-horse-item">
                <h2>Weight</h2>
                <p>
                  Select the closest weight for your horse. Note: weights will
                  change based on lifestyle selected.
                </p>
                <h3>Horse Weight</h3>
                <select
                  id="ddlhorseweight"
                  name="HorseWeight"
                  aria-invalid="true"
                >
                  <option value="0">Select Horse Weight</option>
                  <option data-weight="600" data-bcal="8300" value="1">
                    600 lbs
                  </option>
                  <option data-weight="650" data-bcal="9000" value="2">
                    650 lbs
                  </option>
                  <option data-weight="700" data-bcal="9600" value="3">
                    700 lbs
                  </option>
                  <option data-weight="750" data-bcal="10300" value="4">
                    750 lbs
                  </option>
                  <option data-weight="800" data-bcal="11000" value="5">
                    800 lbs
                  </option>
                  <option data-weight="850" data-bcal="11700" value="6">
                    850 lbs
                  </option>
                  <option data-weight="900" data-bcal="12400" value="7">
                    900 lbs
                  </option>
                  <option data-weight="950" data-bcal="13100" value="8">
                    950 lbs
                  </option>
                  <option data-weight="1000" data-bcal="13800" value="9">
                    1000 lbs
                  </option>
                  <option data-weight="1050" data-bcal="14500" value="10">
                    1050 lbs
                  </option>
                  <option data-weight="1100" data-bcal="15100" value="11">
                    1100 lbs
                  </option>
                  <option data-weight="1150" data-bcal="15800" value="12">
                    1150 lbs
                  </option>
                  <option data-weight="1200" data-bcal="16500" value="13">
                    1200 lbs
                  </option>
                  <option data-weight="1250" data-bcal="17200" value="14">
                    1250 lbs
                  </option>
                  <option data-weight="1300" data-bcal="17900" value="15">
                    1300 lbs
                  </option>
                  <option data-weight="1350" data-bcal="18600" value="16">
                    1350 lbs
                  </option>
                  <option data-weight="1400" data-bcal="19300" value="17">
                    1400 lbs
                  </option>
                </select>
              </div>
              <div className="info-horse-item">
                <h2>Forage Intake</h2>
                <p>
                  Select the amount that most closely describes how much hay or
                  pasture your horse consumes per day. You may also check the
                  box below if your horse cannot adequately chew or digest
                  forage due to dental or digestive concerns.
                </p>
                <h3>Forage Amount</h3>
                <select id="HayAmount" name="HayAmount">
                  <option value="" data-description="">
                    Select Forage Amount
                  </option>
                  <option
                    value="1.5"
                    data-description="Low = daily intake of 1.5% of bodyweight in hay or pasture"
                  >
                    Low (1.5 lbs forage/100 lbs body weight)
                  </option>
                  <option
                    value="2.0"
                    data-description="Medium = daily intake of 2.0% of bodyweight in hay or pasture"
                  >
                    Medium (2.0 lbs forage/100 lbs body weight)
                  </option>
                  <option
                    value="2.5"
                    data-description="High = daily intake of 2.5% of bodyweight in hay or pasture.  This would be closest to free-choice access."
                  >
                    High (2.5 lbs forage/100 lbs body weight)
                  </option>
                </select>
                <button>Calculate Results</button>
              </div>
            </div>
          </div>
        </div>
      </Area>
    </Layout>
  );
}
