import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ActionItemsTable from './ActionItemsTable';
import { v4 as uuid } from 'uuid';
import { loadActions, saveActions } from '../../redux/actions/actionItemsActions';

const ActionItems = ({ actions, loadActions, saveActions }) => {

    let [actionItems, setActionItems] = useState([]);

    useEffect(() => {
        loadActions();
    }, [])

    useEffect(() => {
        if (actions.actions) {
            setActionItems(setupActionItems(actions.actions));
        }
    }, [actions])

    const addActionItem = () => {
        actionItems = [...actionItems, { name: '' }];
        actionItems = setupActionItems(actionItems);
        setActionItems(actionItems);
    }

    const updateActionItem = (e, rowId) => {
        let { name, value } = e.target;
        actionItems = actionItems.map(action => {
            if (action.rowId == rowId) {
                action = { ...action, [name]: value }
            }
            return action;
        });
        setActionItems(setupActionItems(actionItems));
    }

    const saveActionItem = () => {
        saveActions(
            { ...actions, actions: actionItems }
        );
    }

    const setupActionItems = (actionItems) => {
        return actionItems.map((action, index) => {
            if (!action.rowId) action = { ...action, rowId: uuid() }
            return { ...action, rowNumber: index + 1 };
        })
    }

    return (
        <ActionItemsTable
            actionItems={actionItems}
            addActionItem={addActionItem}
            updateActionItem={updateActionItem}
            saveActionItem={saveActionItem}
        />
    )
}

ActionItems.propTypes = {
    actions: PropTypes.object.isRequired,
    loadActions: PropTypes.func.isRequired,
    saveActions: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        actions: state.actions,
    };
}

const mapDispatchToProps = { loadActions, saveActions };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionItems);