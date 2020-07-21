import Button from 'modules/common/components/Button';
import FormGroup from 'modules/common/components/form/Group';
import ControlLabel from 'modules/common/components/form/Label';
import ModalTrigger from 'modules/common/components/ModalTrigger';
import { IButtonMutateProps, IOption } from 'modules/common/types';
import ChannelForm from 'modules/settings/channels/containers/ChannelForm';
import { IChannel } from 'modules/settings/channels/types';
import React from 'react';
import Select from 'react-select-plus';
import { __ } from '../../../common/utils';
import { LeftContent, Row } from '../styles';

type Props = {
  channels: IChannel[];
  onChange: (values: string[]) => any;
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  defaultValue?: string[];
  isRequired?: boolean;
  description?: string;
};

class SelectChannels extends React.Component<Props, {}> {
  renderAddBrand = () => {
    const { renderButton } = this.props;

    const trigger = (
      <Button btnStyle="primary" uppercase={false} icon="plus-circle">
        Create channel
      </Button>
    );

    const content = props => (
      <ChannelForm {...props} renderButton={renderButton} />
    );

    return (
      <ModalTrigger
        title="Create channel"
        trigger={trigger}
        content={content}
      />
    );
  };

  generateUserOptions(array: IChannel[] = []): IOption[] {
    return array.map(item => {
      const channel = item || ({} as IChannel);

      return {
        value: channel._id,
        label: channel.name
      };
    });
  }

  onChangeChannel = values => {
    console.log(values);

    const ids = values.map(item => item.value) || [];

    this.props.onChange(ids);
  };
  render() {
    const { channels, defaultValue, isRequired, description } = this.props;

    return (
      <FormGroup>
        <ControlLabel required={isRequired}>Channel</ControlLabel>
        {description && <p>{description}</p>}
        <Row>
          <LeftContent>
            <Select
              placeholder={__('Select channel')}
              value={defaultValue}
              onChange={this.onChangeChannel}
              options={this.generateUserOptions(channels)}
              multi={true}
            />
          </LeftContent>
          {this.renderAddBrand()}
        </Row>
      </FormGroup>
    );
  }
}

export default SelectChannels;
