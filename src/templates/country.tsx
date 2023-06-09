import * as React from "react";
import "../index.css";
import "../custom.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import { StaticData } from "../../sites-global/staticData";
import { favicon, regionNames, stagingBaseurl } from "../../sites-global/global";
import NewHeader from "../components/layouts/NewHeader";
import NewFooter from "../components/layouts/NewFooter";
import PageLayout from "../components/layouts/PageLayout";
/**
 * Required when Knowledge Graph data is used for a template.
 */
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "country",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.address",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildren.name",
      // "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.dm_baseEntityCount",
      "dm_directoryChildren.dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildren.dm_directoryChildren.name",
      "dm_directoryChildren.dm_directoryChildren.dm_directoryChildren.slug"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_country"],
      savedFilterIds: [
        "dm_stores-directory_address_countrycode"
      ]
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  currentUrl = "/" + document.slug.toString() + ".html";
  return "/" + document.slug.toString() + ".html";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {

  return {
    title: `${document.c_meta_title ? document.c_meta_title : `Stores in ${document.name} | Find a Local Store`}`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${document.c_meta_description ? document.c_meta_description : `Use this page to find your nearest MGM store in ${document.name} and discover the location details you need to visit us today.`}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "keywords",
          content: document.name,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },
      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${stagingBaseurl
            ? stagingBaseurl + document.slug + ".html"
            : "/" + document.slug + ".html"
            }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: `/${document.slug ? document.slug : `${document.name.toLowerCase()}`}.html`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find Store in ${document.name}.`}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: `/${document.slug ? document.slug : `${document.name.toLowerCase()}`}.html`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find Store in ${document.name}. We stock high-quality, robust products at competitive rates.`}`
        },
      },
    ],
  };
};

const country: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    slug,
    id,
    _site,
    address,
    c_locatorBannerImage,
    dm_directoryParents,
    dm_directoryChildren
  } = document;
  const childrenDivs = dm_directoryChildren ? dm_directoryChildren.map((entity: any) => {
    let detlslug;

    if (typeof entity.dm_directoryChildren != "undefined") {
      if (entity.dm_baseEntityCount == 1) {
       
        entity.dm_directoryChildren.map((res: any) => {
          // console.log(res,"xydgksd")
          let detlslug1 = "";
          if (!res.slug) {
            let slugString = res.id + " " + res.name;
            // console.log(slugString,"string")
            let slug = slugString;
          
            detlslug1 = `${slug}.html`;
            // console.log(detlslug1,"ajay")
          } else {
            detlslug1 = `/${res.slug}.html`;
            // console.log(detlslug1,"naman")
          }
          res.dm_directoryChildren ? res.dm_directoryChildren.map((detl: any) => {
            
            if (!detl.slug) {
              let slugString = detl.name;
              let slug = slugString;

              let newslug = slug.replaceAll("MGM Timber Inverness", 'MGMInverness');
              
              // detlslug1 = newslug
              detlslug1 =   entity.slug+"/"+ newslug +"/"+res.slug +".html";
              console.log(detlslug1,"123456")
            } else {
              detlslug1 = `${detl.slug.toString()}.html`;
              // console.log(detlslug1,"snhdkshdfskh")
            }
            detlslug = detlslug1;
          }) : detlslug = detlslug1;
        })
      }
      else {
        detlslug = slug + "/" + entity.slug + ".html";
        // console.log(detlslug,"multiple")
      }
    }

    return (
      <li className=" storelocation-category">
        <a
          key={entity.slug}
          href={detlslug}>
          {entity.name} ({entity.dm_baseEntityCount})
        </a>
      </li>
    )
  }) : null;

  let bannerimage = c_locatorBannerImage ? c_locatorBannerImage.map((element: any) => {
    return element.url
  }) : null;

  return (
    <>
     <PageLayout _site={_site} global={undefined}>
      <BreadCrumbs
        name={regionNames.of(name)}
        address={address}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
      ></BreadCrumbs>
      <div className="content-list">
        <div className="container">
          <div className="sec-title">
            <h2 style={{ textAlign: "center" }}>
              {StaticData.AllRegion} {regionNames.of(name)}{" "}
            </h2>
          </div>
          <ul className="region-list">
            {childrenDivs}
          </ul>
        </div>
      </div>
      </PageLayout>
    </>
  );
};

export default country;
