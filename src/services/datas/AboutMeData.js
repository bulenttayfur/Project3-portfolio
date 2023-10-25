

import fenerbahcephoto from "../../photos/fenerbahce.png";
import marmaraphoto from "../../photos/marmara.png";
import yeditepephoto from "../../photos/yeditepe.png";


import transpartlogophoto from "../../photos/transpartlogo.png"
import veritaslogophoto from "../../photos/veritaslogo.png"
import scalatekslogophoto from "../../photos/scalatekslogo.png"

// EDUCATION
const marmara = {
  photo: marmaraphoto,
  title: "Marmara Üniversitesi",
  info: "Uluslararası Ticaret ve Para Yönetimi",
  detail: "Yüksek Lisans",
  time: "2018-2020",
};

const yeditepe = {
  photo: yeditepephoto,
  title: "Yeditepe Üniversitesi",
  info: "Uluslararası Ticaret ve İşletmecilik",
  detail: "Lisans",
  time: "2010-2015",
};

const fenerbahce = {
  photo: fenerbahcephoto,
  title: "Fenerbahçe Lisesi",
  info: "Eşit Ağırlık",
  detail: "Lise",
  time: "2006-2010",
};

// BUSINESS
const scalateks = {
  photo: scalatekslogophoto,
  title: "Scalateks Tekstil",
  info: "Yurtdışı Satış Sorumlusu",
  start: "2018",
  time: "6 Yıl",
};

const veritas = {
  photo: veritaslogophoto,
  title: "Bureau Veritas",
  info: "İhracat Operasyon Sorumlusu",
  start: "2017",
  time: "6 Ay",
};

const transpart = {
  photo: transpartlogophoto,
  title: "Transpart Otomotiv",
  info: "İhracat Operasyon Asistanı",
  start: "2014",
  time: "2 Yıl",
};

export const EducationDatas = [marmara, yeditepe, fenerbahce];
export const BusinessDatas = [scalateks, veritas, transpart];
