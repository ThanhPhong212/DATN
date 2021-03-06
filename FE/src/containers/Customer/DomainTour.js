import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../HomePage/HeaderPage/HomeHeader";
import Footer from "../HomePage/Footer/Footer";
import * as actions from "../../store/actions";
import "./DomainTour.scss";
class DomainTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domainTour: [],
      placesArr: [],
      placesA2Arr: [],
      idmas: "",
      domainArr: "",
    };
  }

  async componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      let id = this.props.match.params.id;
      await this.props.getTourDomain(id);
      this.setState({
        idmas: id,
      });
    }
    this.props.getPlace();
    this.props.getPlaceA2();
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    let idmas = this.props.match && this.props.match.params && this.props.match.params.id;
    if (this.state.idmas !== idmas) {
      let id = idmas;
      await this.props.getTourDomain(id);
      this.setState({
        idmas: id,
      });
    }
    if (prevProps.tourDomain !== this.props.tourDomain) {
      this.setState({
        domainTour: this.props.tourDomain,
      });
    }
    if (prevProps.places !== this.props.places) {
      this.setState({
        placesArr: this.props.places,
      });
    }
    if (prevProps.placesA2 !== this.props.placesA2) {
      this.setState({
        placesA2Arr: this.props.placesA2,
      });
    }
  }
  handleInfoTour = (tour) => {
    this.props.history.push(`/thong-tin-chuyen-di/${tour.id}`);
    window.location.reload();
  };

  handlePlace = (place) => {
    this.props.history.push(`/dia-diem-du-lich/${place.id}`);
    window.location.reload();
  };
  render() {
    let Domain = this.state.domainTour;
    let places = this.state.placesArr;
    let placesA2 = this.state.placesA2Arr;
    return (
      <>
        <HomeHeader />
        <div className="tour_DomainTour_container">
          <div className="tour_DomainTour_content">
            <div className="title_tour">
              <div className="name_DomainTour">
                <b>
                  {this.state.idmas === "M1"
                    ? "DU L???CH MI???N B???C"
                    : this.state.idmas === "M2"
                    ? "Du L???CH MI???N TRUNG"
                    : this.state.idmas === "M3"
                    ? "DU L???CH MI???N NAM"
                    : this.state.idmas === "C1"
                    ? "DU L???CH CH??U ??"
                    : this.state.idmas === "C2"
                    ? "DU L???CH CH??U ??U"
                    : this.state.idmas === "C3"
                    ? "DU L???CH CH??U PHI"
                    : this.state.idmas === "C4"
                    ? "DU L???CH CH??U M???"
                    : "DU L???CH CH??U ??C"}
                </b>
                <br />
                <span>
                  {this.state.idmas === "M1"
                    ? "Du l???ch Mi???n B???c - Mi???n B???c Vi???t Nam c?? nhi???u danh lam th???ng c???nh n???i ti???ng trong n?????c v?? tr??n th??? gi???i ti??u bi???u nh??: H??? Long, Sapa, Y??n T???, Ch??a H????ng, C??n S??n Ki???p B???c, L???ng S??n, H?? Giang, Hoa L?? Tam C???c, ?????n M???u ??u C??, ?????n Tr???n, ?????n B?? Ch??a Kho, ?????n H??ng..."
                    : this.state.idmas === "M2"
                    ? "Du l???ch Mi???n Trung ??? Mi???n Trung c??t tr???ng n???ng v?? gi??, s??? h???u nhi???u b??i bi???n ?????p, Mi???n Trung lu??n l?? s??? l???a ch???n h??ng ?????u c???a du kh??ch trong v?? ngo??i n?????c. Smile Travel chuy??n t??? ch???c c??c tour du l???ch Mi???n Trung kh???i h??nh t??? th??nh ph??? H??? Ch?? Minh v???i gi?? t???t nh???t v?? d???ch v??? t???t nh???t."
                    : this.state.idmas === "M3"
                    ? "Du l???ch Mi???n Nam ??? Mi???n Nam th??n th????ng v???i r???t nhi???u ??i???m du l???ch ?????p gi??u ch???t th?? nh?? Ph?? Qu???c, C??n ?????o, C???n Th??, Long H???i...v???i r???t nhi???u di t??ch l???ch s??? oai h??ng c???a m???t th???i d???ng n?????c v?? gi??? n?????c song h??nh v???i ???? l?? m??u v?? n?????c m???t."
                    : this.state.idmas === "C1"
                    ? "Du l???ch Ch??u ?? ??? Ch??u ?? lu??n l?? ??i???m ?????n l?? t?????ng c???a du kh??ch Vi???t. ?????n v???i tour Ch??u ?? c???a ch??ng t??i du kh??ch s??? ???????c kh??m ph?? c??c k??? quan n???i ti???ng c???a c??c n?????c nh??: Trung Qu???c, Campuchia, Nh???t B???n. H??n Qu???c, ???n ????????hay c??c thi??n ???????ng mua s???m nh??: Singapore, Malaysia, Tha?? Lan, H???ng K??ng???Hi???n nay ch??ng t??i c?? c??c tour Ch??u ?? sau:"
                    : this.state.idmas === "C2"
                    ? "Du l???ch Ch??u ??u - Ch??u ??u v??ng ?????t c???a n??n v??n minh v?? gi??u c??, n??i c?? nhi???u danh th???ng k??? quan ?????p b???c nh???t tr??n th???i gi???i. Ng??y c??ng nhi???u ng?????i Vi???t c?? ??i???u ki???n du l???ch Ch??u ??u do c???i thi???n v??? kinh t??? c??ng nh?? vi???c ??i l???i b???ng ???????ng h??ng kh??ng ng??y c??ng c???i ti???n. Tour du l???ch Ch??u ??u ????a du kh??ch ?????n v???i c??c n??n v??n minh l??u ?????i nh???t c???a nh??n lo???i."
                    : this.state.idmas === "C3"
                    ? "Du l???ch Ch??u Phi ??? Ch??u Phi l?? l???c ?????a l???n th??? 2 th??? gi???i, v?? c??ng l?? n??i c?? nhi???u c???nh quan thi??n nhi??n c??ng h??? sinh th??i v?? c??ng ?????c s???c. Tuy nhi??n, ????ng ti???c l?? ch??u l???c n??y l???i kh??ng thu h??t qu?? nhi???u kh??ch du l???ch."
                    : this.state.idmas === "C4"
                    ? "Du l???ch Ch??u M??? - C??ch Vi???t Nam n???a v??ng tr??i ?????t, tuy c??n kh?? xa l??? v???i ng?????i Vi???t nh??ng Ch??u M??? lu??n l?? ??i???m ?????n th?? v??? cho nh???ng ai th??ch kh??m ph??. Tour du l???ch Ch??u M??? c???a Star Travel lu??n l?? l???a ch???n h??ng ?????u cho du kh??ch. Ch??ng t??i th?????ng xuy??n m??? c??c tour du l???ch Ch??u M??? ??i c??c n?????c M???, Canada, Brazil???v???i gi?? t???t nh???t."
                    : "Du l???ch Ch??u ??c ??? Tour du l???ch Ch??u ??c c???a Star Travel ????a du kh??ch kh??m ph?? ???h??n ?????o l???n nh???t th??? gi???i???, x??? s??? c???a nh???ng ch?? chu???t xinh x???n, l??nh ?????a c???a lo??i c?? s???u hung b???o hay kh??m ph?? c??c hoang m???c r???ng l???n."}
                </span>
                <br />
              </div>
              {Domain.length > 0 ? (
                <div className="tour">
                  {Domain &&
                    Domain.length > 0 &&
                    Domain.map((item, index) => {
                      return (
                        <div className="tour_info" key={index}>
                          <div
                            className="image"
                            dangerouslySetInnerHTML={{ __html: item.imgTourHTML }}
                          ></div>
                          <div className="address">
                            <i className="fas fa-map-marker-alt"></i>
                            {item.placeData.name}
                          </div>
                          <div className="info">
                            <div className="name" onClick={() => this.handleInfoTour(item)}>
                              <b>{item.name}</b>
                            </div>
                            <div className="location">
                              <i className="fas fa-map-marker-alt"></i>
                              KH: {item.startAddress}
                            </div>
                            <div className="time">
                              <i className="fa fa-calendar-alt"></i>
                              TG: {item.timeData.value}
                            </div>
                            <div className="price">
                              {item.price}??<button className="btn-tour">?????t tour</button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className="text-center not_tour"> Hi???n ch??a c?? chuy???n ??i n??o!</div>
              )}
            </div>
            {this.state.idmas === "M1" || this.state.idmas === "M2" || this.state.idmas === "M3" ? (
              <div className="places">
                <div className="place_title">
                  <label>??i???m ?????n du l???ch</label>
                  <div className="img_place">
                    <img
                      src="https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/trucchinh2/2021_06_08/pha-din-con-deo-dep-hang-dau-viet-nam-hinh-13.jpg"
                      alt="???nh ?????p Vi???t Nam"
                    />
                  </div>
                </div>

                <div className="place_place">
                  {places &&
                    places.length > 0 &&
                    places.map((item, index) => {
                      return (
                        <div className="name" key={index} onClick={() => this.handlePlace(item)}>
                          Du l???ch {item.name}
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <div className="places">
                <div className="place_title">
                  <label>??i???m ?????n du l???ch</label>
                  <div className="img_place">
                    <img
                      src="https://media.vov.vn/sites/default/files/styles/large/public/2020-12/b1_2.jpg"
                      alt="???nh ?????p Vi???t Nam"
                    />
                  </div>
                </div>

                <div className="place_place">
                  {placesA2 &&
                    placesA2.length > 0 &&
                    placesA2.map((item, index) => {
                      return (
                        <div className="name" key={index} onClick={() => this.handlePlace(item)}>
                          Du l???ch {item.name}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tourDomain: state.admin.tourDomain,
    places: state.admin.places,
    placesA2: state.admin.placesA2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTourDomain: (id) => dispatch(actions.getTourDomain(id)),
    getPlace: () => dispatch(actions.getPlace()),
    getPlaceA2: () => dispatch(actions.getPlaceA2()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DomainTour);
