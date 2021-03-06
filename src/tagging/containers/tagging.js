import { connect } from 'react-redux';
import { changeAssignedTag, deleteAssignedTag, toggleTagCategoryChange, toggleTagValueChange, loadState, addAssignedTag } from '../actions';
import Tagging from '../components/Tagging/Tagging';
import TaggingWithButtons from '../components/TaggingWithButtons/TaggingWithButtons';

// container compo
const mapStateToProps = ({ tagging }) => ({
  tags: tagging.appState.tags,
  selectedTagCategory: tagging.appState.selected.tagCategory,
  selectedTagValue: tagging.appState.selected.tagValue,
  assignedTags: tagging.appState.assignedTags,
});


const mapDispatchToProps = dispatch => ({
  onTagDeleteClick: (tag, options) => {
    dispatch(deleteAssignedTag(tag, options));
  },
  onTagCategoryChange: (cat) => {
    dispatch(toggleTagCategoryChange(cat));
  },
  onTagValueChange: (val, options) => {
    dispatch(toggleTagValueChange(val, options));
    dispatch(changeAssignedTag(val));
  },

  onTagMultiValueChange: (val, options) => {
    dispatch(toggleTagValueChange(val, options));
    dispatch(addAssignedTag(val));
  },

  onLoadState: (state) => {
    dispatch(loadState(state));
  },
});

const TaggingConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tagging);

const TaggingWithButtonsConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaggingWithButtons);

export { TaggingConnected, TaggingWithButtonsConnected };
