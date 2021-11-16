import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import Spinner from 'modules/common/components/Spinner';
import { IAttachment } from 'modules/common/types';

import { withProps } from 'modules/common/utils';
import { queries as formQueries } from 'modules/forms/graphql';
import { COLUMN_CHOOSER_EXCLUDED_FIELD_NAMES } from 'modules/settings/properties/constants';
import { FieldsCombinedByTypeQueryResponse } from 'modules/settings/properties/types';
import React from 'react';
import { graphql } from 'react-apollo';
import MapColumn from '../components/MapColumn';
import { queries } from '../graphql';

type Props = {
  contentType: string;
  attachments: IAttachment[];
};

type State = {};

type FinalProps = {
  fieldsQuery: FieldsCombinedByTypeQueryResponse;
  importHistoryGetColumns: any;
} & Props;

class MapColumnContainer extends React.Component<FinalProps, State> {
  render() {
    const { fieldsQuery, importHistoryGetColumns } = this.props;

    if (!fieldsQuery || fieldsQuery.loading) {
      return <Spinner />;
    }

    if (
      !importHistoryGetColumns ||
      (importHistoryGetColumns && importHistoryGetColumns.loading)
    ) {
      return <Spinner />;
    }

    const fields = (fieldsQuery.fieldsCombinedByContentType || []).map(item => {
      return {
        value: item.name || item._id,
        label: item.label || item.title,
        type: (item.type || '').toLowerCase(),
        group: item.group || '',
        selectOptions: item.selectOptions || [],
        // radio button options
        choiceOptions: item.options || []
      };
    });

    const columns = importHistoryGetColumns.importHistoryGetColumns;

    return <MapColumn fields={fields} columns={columns} />;
  }
}

export default withProps<Props>(
  compose(
    graphql<Props>(gql(formQueries.fieldsCombinedByContentType), {
      name: 'fieldsQuery',
      options: ({ contentType }) => {
        return {
          variables: {
            contentType: ['lead', 'visitor'].includes(contentType)
              ? 'customer'
              : contentType,
            usageType: 'import',
            excludedNames: COLUMN_CHOOSER_EXCLUDED_FIELD_NAMES.IMPORT
          }
        };
      }
    }),
    graphql<Props>(gql(queries.importHistoryGetColumns), {
      name: 'importHistoryGetColumns',
      skip: ({ attachments }) => attachments.length === 0,
      options: ({ attachments }) => {
        return {
          variables: {
            attachmentName: attachments[0].url
          }
        };
      }
    })
  )(MapColumnContainer)
);
