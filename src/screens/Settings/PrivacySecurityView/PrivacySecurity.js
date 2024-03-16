import React, {Component} from 'react';
import {connect} from 'react-redux';
import Strings from '../../../localization/Strings';
import {goBack} from '../../../navigation/NavigationUtils';
import SettingsTemplate_Component from '../SettingsTemplate/SettingsTemplate_Component';

class PrivacySecurity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.backupSeedPhraseClick = this.backupSeedPhraseClick.bind(this);
    this.resetFaceIdClick = this.resetFaceIdClick.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  backupSeedPhraseClick = () => {
    console.log('backupSeedPhraseClick');
  };

  resetFaceIdClick = () => {
    console.log('resetFaceIdClick');
  };

  render() {
    return (
      <>
        <SettingsTemplate_Component
          headerTittle={Strings.privacy_and_security}
          renderSettingsList={[
            {
              leftIconName: 'Shield_done1',
              tittle: Strings.backup_seed_phrase,
              headerLabel: Strings.security,
              onPress: this.backupSeedPhraseClick,
            },
            {
              leftIconName: 'Scan',
              tittle: Strings.reset_face_id,
              onPress: this.resetFaceIdClick,
            },
          ]}
          onPressLeftContent={this.onPressLeftContent}
        />
      </>
    );
  }
}

const mapActionCreators = {};
const mapStateToProps = state => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    isLoading: state.global.loading,
  };
};
export default connect(mapStateToProps, mapActionCreators)(PrivacySecurity);
