import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./ServiceDetails.scss";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Select from "react-select";
import commonService from "../../Common/commonService";

const ServiceDetails = () => {
    const { id } = useParams(); // Get the service ID from the URL

    const [interest, setInterest] = useState("");
    const [desc, setDesc] = useState("");
    const [formData, setFormData] = useState(() => {
        const defaultData = {
            FirstName: "",
            LastName: "",
            company_name: "",
            WorkEmail: "",
            mobile_code: "",
        };
        if (id === "in-house-library" || id === "custom-scent") {
            defaultData.website = "";
        } else {
            defaultData.inquiry_requirements = "";
        }

        return defaultData;
    });

    const [pPhonecode, setPPhonecode] = useState("");
    const [phoneCodeDataDrp, setPhoneCodeDataDrp] = useState([]);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === "mobile_code") {
            const numericValue = value.replace(/\D/g, "");
            setFormData({ ...formData, [name]: numericValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const phoneCodeSetDrp = () => {
        var pdata = JSON.parse(sessionStorage.getItem("country_data"));
        for (let c = 0; c < pdata.length; c++) {
            pdata[c].value = pdata[c].phonecode;
            pdata[c].label = pdata[c].phonecode + " - " + pdata[c].name;
        }
        pdata.splice(0, 0, { value: "", label: "Phone Code" });
        setPhoneCodeDataDrp(pdata);
        var data = pdata.filter((item) => item.value === pPhonecode);
        setPPhonecode(data[0]);
    };

    const countryDrp = () => {
        const countryDataDrp = {
            a: "getCountry",
            SITDeveloper: "1",
        };
        commonService
            .postApi("/TechnicalManagement", countryDataDrp)
            .then((res) => {
                if (res.data.success == 1) {
                    sessionStorage.setItem("country_data", JSON.stringify(res.data.data));
                    phoneCodeSetDrp();
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(() => { });
    };

    const changeProfileData = (e, value) => {
        if (e.value != "" && e.value != "Phone Code") {
            setPPhonecode(e);
        } else {
            setPPhonecode("");
        }
    };

    const toFormUrlEncoded = (data) => {
        return Object.keys(data)
            .map(
                (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            )
            .join("&");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setInterest(interest);
        setDesc(desc);
        const updatedFormData = {
            // a: 'SendMailArtisanalParfumHouseOurServices',
            // SITDeveloper: '1',
            ...formData,
            ...(id === "in-house-library" && interest !== "" ? { remark: interest } : {}),
            ...(id !== "in-house-library" && desc !== "" ? { remark: desc } : {}),
            ...(pPhonecode?.id !== "" ? { mobile_country_id: pPhonecode?.id } : {}),
            subject: service.title,
        };
        if (
            formData.FirstName !== "" &&
            formData.LastName !== "" &&
            formData.WorkEmail !== "" &&
            ((id === "in-house-library" || id === "custom-scent")
                ? formData.website != ""
                : formData.inquiry_requirements != "") &&
            formData.company_name !== "" &&
            formData.mobile_code !== "" &&
            (interest !== "" || desc !== "") &&
            pPhonecode?.value !== ""
        ) {
            const body = toFormUrlEncoded(updatedFormData);
            const headers = {
                "Content-Type": "application/x-www-form-urlencoded",
            };
            axios
                .post(window.location.origin + "/register.php", body, {
                    headers,
                    responseType: "text",
                })
                .then((res) => {
                    if (res.data === '1') {
                        toast.success("Message sent Successfully.");
                        setFormData({
                            FirstName: "",
                            LastName: "",
                            company_name: "",
                            WorkEmail: "",
                            mobile_code: "",
                            website: "",
                            inquiry_requirements: ""
                        });
                        setInterest("");
                        setDesc("");
                        setPPhonecode("");
                    } else {
                        toast.error('Email or Mobile number already exist')
                    }
                })
        } else {
            for (const key in formData) {
                if (formData[key].trim() === "") {
                    toast.error(
                        `${key.charAt(0).toUpperCase() + key.slice(1)} field is required.`
                    );
                    return;
                }
            }

            if (id === "in-house-library" && interest === "") {
                toast.error("Select Interested In field.");
            } else if (id !== "in-house-library" && desc === "") {
                toast.error("Description field is required.");
            } else if (pPhonecode?.value === "") {
                toast.error("Phone Code field is required.");
            }
        }
    };
    // Mock data for services
    const serviceData = {
        "custom-scent": {
            title: "Custom scent creations",
            description: `
               Artisanal Parfum House stands as one of India’s most modern and well-equipped fragrance houses, offering a bespoke experience for clients to create their unique signature scents tailored for retail and e-commerce markets. Our global network of highly skilled perfumers ensures exceptional craftsmanship at every stage of the process. From sourcing the finest raw materials to crafting compelling narratives around each fragrance, we manage it all with precision and artistry.`,
            additional: `
                With an extensive collection of both natural and synthetic ingredients, we possess the versatility to create fragrances that transcend boundaries, catering to diverse olfactory preferences and market demands. Every creation reflects our commitment to innovation, quality, and sophistication, making us a trusted partner for transforming ideas into captivating fragrances. At Artisanal Parfum House, we don’t just create scents—we craft timeless experiences that resonate and inspire.`,
        },
        "in-house-library": {
            title: "Exclusive in-house library",
            description: `
                At Artisanal Parfum House, we have meticulously studied the Indian and GCC fragrance markets to better understand the needs of our small-pack buyers. In response, we offer an extensive collection of fine fragrances, developed through years of expertise and innovation, designed specifically to cater to their unique requirements.`,
            additional: `
                Our comprehensive online portal and dedicated support system ensure a seamless onboarding process, enabling small-pack buyers to explore and select from a diverse range of inspirational creations. These expertly crafted fragrances are ideal for retail stores and small businesses looking to provide high-quality, captivating scents to their customers.`,
            additional1: `
                With a commitment to excellence and adaptability, Artisanal Parfum House strives to empower small businesses with access to world-class fragrances. By combining our modern infrastructure with a deep understanding of market trends, we continue to serve as a trusted partner for growing businesses in the fragrance industry.`,
        },
        "bottles-caps-components": {
            title: "Bottles, caps and components",
            description: `
                At Artisanal Parfum House, we stock premium-quality glass bottles, caps, and atomizers sourced from India and China, featuring the latest trending designs. Unlike conventional traders and wholesalers, we offer a low MOQ of just 500 units, enabling individuals, enterprises, and businesses to create unique, custom-designed bottles for their perfume brands.`,
            additional: `
                Our inventory includes some of the finest glass bottles and high-quality caps and atomizers available, catering to various dosages and mechanisms. With a focus on excellence and versatility, we provide tailored solutions for all types of brands, ensuring every client achieves their vision with precision and style.`,
        },
        "boxing-and-packaging": {
            title: "Boxing and packaging",
            description: `
                At Artisanal Parfum House, we offer comprehensive in-house boxing and packaging solutions for all types of perfume brands. From 6ml roll-on bottles to 100ml eau de parfums, we provide a wide range of boxes in various shapes and sizes to meet diverse client needs.`,
            additional: `
                Our dedicated team is committed to innovation, constantly introducing modern and creative packaging options to elevate brand presentation. Additionally, our in-house design team collaborates closely with clients to develop exceptional designs and branding concepts tailored to their vision. We ensure every brand receives the finest packaging solutions to stand out in the competitive market.`,
        },
    };

    useEffect(() => {
        countryDrp();
    }, []);
    // Fetch the service details based on the ID
    const service = serviceData[id];
    return (
        <>
            <Header />
            <ToastContainer />
            <div className="main">
                <div className="fragrance-details">
                    <div className="container py-space">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <Link className="BackToService" to={"/our-service"}>
                                    Back to service
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <div className="fragrance-text">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                    <p>{service.additional}</p>
                                    <p>{service.additional1}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="fragrance-right">
                                    <div className="fragrance-title">
                                        <h3>We'll reach out to you with more details shortly!</h3>
                                    </div>
                                    <form
                                        className="contact-form"
                                        onSubmit={(event) => handleSubmit(event)}
                                    >
                                        <div className="form-row">
                                            <div className="form-column">
                                                <label htmlFor="name" className="form-label">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="FirstName"
                                                    value={formData.FirstName}
                                                    onChange={handleOnChange}
                                                    placeholder="First name"
                                                    className="form-input"
                                                />
                                            </div>
                                            <div className="form-column">
                                                <label htmlFor="name" className="form-label">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="LastName"
                                                    value={formData.LastName}
                                                    onChange={handleOnChange}
                                                    placeholder="Last name"
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-column">
                                                <label htmlFor="company" className="form-label">
                                                    Company name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company_name"
                                                    value={formData.company_name}
                                                    onChange={handleOnChange}
                                                    placeholder="Company name"
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-column">
                                                <label htmlFor="email" className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="WorkEmail"
                                                    value={formData.WorkEmail}
                                                    onChange={handleOnChange}
                                                    placeholder="Your email"
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-column PhoneCode" >
                                                <label htmlFor="contact" className="form-label">Phone code </label>
                                                <Select
                                                    options={phoneCodeDataDrp}
                                                    placeholder="Phone code"
                                                    value={pPhonecode}
                                                    onChange={(e) => {
                                                        changeProfileData(e, "phoneCode");
                                                    }}
                                                    isSearchable={true}
                                                    isMulti={false}
                                                    menuPortalTarget={document.body}
                                                    styles={{
                                                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                                                    }}
                                                    className="custom-react-select-container phoneCode"
                                                    classNamePrefix="custom-react-select"
                                                />
                                            </div>
                                            <div className="form-column">
                                                <label htmlFor="contact" className="form-label">
                                                    Mobile
                                                </label>

                                                <input
                                                    type="tel"
                                                    id="contact"
                                                    name="mobile_code"
                                                    value={formData.mobile_code}
                                                    minLength="10"
                                                    maxLength="16"
                                                    onChange={handleOnChange}
                                                    placeholder="Your phone number"
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-column">
                                                <label htmlFor="website" className="form-label">
                                                    {" "}
                                                    {id === "in-house-library" || id === "custom-scent"
                                                        ? "Website"
                                                        : "Requirements"}
                                                </label>
                                                <input
                                                    type="text"
                                                    id={
                                                        id === "in-house-library" || id === "custom-scent"
                                                            ? "website"
                                                            : "inquiry_requirements"
                                                    }
                                                    name={
                                                        id === "in-house-library" || id === "custom-scent"
                                                            ? "website"
                                                            : "inquiry_requirements"
                                                    }
                                                    value={
                                                        id === "in-house-library" || id === "custom-scent"
                                                            ? formData.website
                                                            : formData.inquiry_requirements
                                                    }
                                                    onChange={handleOnChange}
                                                    placeholder={
                                                        id === "in-house-library" || id === "custom-scent"
                                                            ? "Enter website"
                                                            : "Enter requirements"
                                                    }
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>
                                        {id === "in-house-library" && (
                                            <div className="form-row">
                                                <div className="form-column">
                                                    <label htmlFor="Interested" className="form-label">
                                                        Interested in
                                                    </label>
                                                    <select
                                                        className="form-input"
                                                        value={interest}
                                                        onChange={(e) => setInterest(e.target.value)}
                                                    >
                                                        <option value="" disabled>
                                                            --Select Interest--
                                                        </option>
                                                        <option value="Fragrances/bottles & caps">
                                                            Fragrances/bottles & caps
                                                        </option>
                                                        <option value="Branding and boxing">
                                                            Branding and boxing
                                                        </option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                        )}
                                        {id !== "in-house-library" && (
                                            <div className="form-row">
                                                <div className="form-column">
                                                    <label htmlFor="issue" className="form-label">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        id="issue"
                                                        name="description"
                                                        value={desc}
                                                        onChange={(e) => setDesc(e.target.value)}
                                                        placeholder="Enter description"
                                                        rows="3"
                                                        className="form-textarea"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        )}
                                        <input type="submit" className="btn btn-primary" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ServiceDetails;
