/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UseImagesQuery
// ====================================================

export interface UseImagesQuery_allFile_nodes_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface UseImagesQuery_allFile_nodes_childImageSharp {
  fluid: UseImagesQuery_allFile_nodes_childImageSharp_fluid | null;
}

export interface UseImagesQuery_allFile_nodes {
  base: string;
  name: string;
  childImageSharp: UseImagesQuery_allFile_nodes_childImageSharp | null;
}

export interface UseImagesQuery_allFile {
  nodes: UseImagesQuery_allFile_nodes[];
}

export interface UseImagesQuery {
  allFile: UseImagesQuery_allFile;
}
