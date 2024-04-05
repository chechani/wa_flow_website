import Layout from '@/components/layout/Layout';
import { useState, useEffect } from 'react';

const category = "About Accxchange";

export default function SmartyFaq() {
  const [faqData, setFaqData] = useState([]);
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const [error, setError] = useState(null);

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://smartysoftware.in/api/method/professional.web.get_smarty_faq?category=${encodeURIComponent(category)}`);
        const data = await response.json();
        setFaqData(data.data);
      } catch (error) {
        setError("Error fetching FAQs: " + error.message);
      }
    };

    fetchData();
  }, []);

  const totalFAQs = faqData.length;
  const leftColumnFAQsCount = Math.ceil(totalFAQs / 2);
  const leftColumnFAQs = faqData.slice(0, leftColumnFAQsCount);
  const rightColumnFAQs = faqData.slice(leftColumnFAQsCount);

  return (
    <>
      <Layout breadcrumbTitle="Faq">
        <div className="container">
          <div className="row default_row">
            <div className="full_width_box">
              {/* ===============spacing============== */}
              <div className="pd_top_70" />
              {/* ===============spacing============== */}
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
                {leftColumnFAQs.map((faq) => (
                  <section className="faq_section type_one">
                    <div className="block_faq">
                      <div className="accordion">
                        <dl>
                          
                            <>
                              <dt
                                className={isActive.key === faq.id ? "faq_header active" : "faq_header"}
                                onClick={() => handleToggle(faq.id)}
                              >
                                <span className="icon-play" /> {faq.question}
                              </dt>
                              <dd
                                className="accordion-content hide"
                                style={{ display: `${isActive.key === faq.id ? "block" : "none"}` }}
                              >
                                <p>{faq.answer}</p>
                              </dd>
                            </>
                        
                        </dl>
                      </div>
                    </div>
                  </section>
                ))}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <section className="faq_section type_two">
                    <div className="block_faq">
                    {rightColumnFAQs.map((faq) => (
                  <section className="faq_section type_one">
                    <div className="block_faq">
                      <div className="accordion">
                        <dl>
                          
                            <>
                              <dt
                                className={isActive.key === faq.id ? "faq_header active" : "faq_header"}
                                onClick={() => handleToggle(faq.id)}
                              >
                                <span className="icon-play" /> {faq.question}
                              </dt>
                              <dd
                                className="accordion-content hide"
                                style={{ display: `${isActive.key === faq.id ? "block" : "none"}` }}
                              >
                                <p>{faq.answer}</p>
                              </dd>
                            </>
                        
                        </dl>
                      </div>
                    </div>
                  </section>
                ))}
                    </div>
                  </section>
                </div>
              </div>
              {/* ===============spacing============== */}
              <div className="pd_bottom_70" />
              {/* ===============spacing============== */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}