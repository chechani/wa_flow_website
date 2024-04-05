import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

export default function Our_Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://clients.smartysoft.in/api/method/professional.web.get_team"
        );
        const data = await response.json();
        setTeamMembers(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout breadcrumbTitle1="About Us" headerStyle={9} footerStyle={1}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  {/*===============spacing==============*/}
                  <div className="pd_top_40" />
                  {/*===============spacing==============*/}
                  <div className="before_title">Smarty</div>
                  <h2>Our Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row default_row">
            <div className="full_width_box">
              {/*===============spacing==============*/}
              <div className="pd_top_20" />
              {/*===============spacing==============*/}
              <div className="team_intro_box">
                {/* Rest of the code */}
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_50" />
              {/*===============spacing==============*/}
              <section className="team-section">
                <div className="row">
                  {teamMembers.map((member, index) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                      key={index}
                    >
                      <div className="team_box style_one">
                        <div className="team_box_outer">
                          <div className="member_image">
                            <img
                              src={"https://clients.smartysoft.in/" + member.photo}
                              alt="team image"
                            />
                          </div>
                          <div className="about_member">
                            <div className="share_media">
                              {/* Share media code */}
                            </div>
                            <div className="authour_details">
                              <span>{member.designation}</span>
                              <h6>{member.member_name}</h6>
                              <div className="button_view">
                                <a
                                  href={member.profileLink}
                                  target="_blank"
                                  rel="nofollow"
                                  className="theme-btn one"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* Rest of the code */}
            </div>
          </div>
        </div>

        {/* <SmartyTimeline /> */}
      </Layout>
    </>
  );
}

