/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';


// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked entries e.g. videoEmbed
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};


function TextGrid2({ data }) {
  return (
    
    <div className="grid grid-row-3 gap-10">
      <div>
        <h2 className="text-5xl font-bold max-w-xs">{data?.fields?.mainHeader}</h2>
        </div>

        <div>
        <h3 className="text-2xl font-bold">{data?.fields?.subheader1}</h3>
        <p className="mt-6">{documentToReactComponents(data?.fields?.paragraph1, renderOptions)}</p>
        </div>

        <div>
        <h3 className="text-2xl font-bold">{data?.fields?.subheader2}</h3>
        <p className="mt-6">{documentToReactComponents(data?.fields?.paragraph2, renderOptions)}</p>
        </div>
    </div>
    
  );
}

TextGrid2.propTypes = {
  data: PropTypes.object,
};

export default TextGrid2;