import React from "react";
import CountrySelect from "../../components/country-select/CountrySelect";
import YesNoFilter from "../../components/YesNoFilter";
import SortType from "../../components/SortType";
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as serverFilterActions from "../../modules/serverFilter";
import * as serverListActions from "../../modules/serverList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";

const ServerFilter = (
    {
        serverListFetching,
        searchFilter,
        countryFilter,
        hideEmptyServer,
        hideFullServer,
        friendlyFire,
        whitelist,
        modded,
        sort,

        ServerFilterActions,
        ServerListActions
    }
) => {
    const {t} = useTranslation();

    const updateServerList = () => {
        if (serverListFetching) return;
        ServerListActions.getServerList();
    }

    const handleChangeSearchFilter = (e) => {
        ServerFilterActions.changeSearch(e.target.value);
    }

    const handleKeyPressSearchFilter = (e) => {
        if (e.key !== 'Enter') return;
        updateServerList();
    }

    const handleChangeCountryFilter = (value) => {
        ServerFilterActions.changeCountry(value);
        updateServerList();
    }

    const handleChangeHideEmpty = (e) => {
        ServerFilterActions.changeHideEmpty(e.target.checked);
        updateServerList();
    }

    const handleChangeHideFull = (e) => {
        ServerFilterActions.changeHideFull(e.target.checked);
        updateServerList();
    }

    const handleChangeFriendlyFire = (value) => {
        ServerFilterActions.changeFriendlyFire(value);
        updateServerList();
    }

    const handleChangeWhitelist = (value) => {
        ServerFilterActions.changeWhitelist(value);
        updateServerList();
    }

    const handleChangeModded = (value) => {
        ServerFilterActions.changeModded(value);
        updateServerList();
    }

    const handleChangeSortType = (value) => {
        ServerFilterActions.changeSortType(value);
        updateServerList();
    }

    return (
        <div className="jumbotron" style={{padding: '20px', marginBottom: '10px'}}>
            <div className="row">
                <div id="search-option" className="col-sm-12 col-md-8 text-center">
                    <div className="form-group">
                        <div className="input-group">
                            <label className="col-form-label search-option-name" htmlFor="server-search">
                                {t('filter-option.server-search.name')}
                            </label>

                            <input type="text" className="form-control btn-secondary"
                                   placeholder={t('filter-option.server-search.placeholder')}
                                   value={searchFilter} onChange={handleChangeSearchFilter}
                                   onKeyDown={handleKeyPressSearchFilter}
                            />

                            <div className="input-group-append">
                                <button className="btn btn-info" type="button" onClick={updateServerList}>
                                    {t('filter-option.server-search.search-btn')}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group text-left">
                            <label className="col-form-label search-option-name" htmlFor="country-filter">
                                {t('filter-option.country-filter')}
                            </label>
                            <CountrySelect
                                value={countryFilter}
                                onChange={handleChangeCountryFilter}
                            />
                        </div>
                    </div>

                    <div className="search-option-toggle row">
                        <div className="col-sm-12 col-md-4" style={{paddingLeft: 0}}>
                            <div className="custom-control custom-switch mt-3">
                                <input type="checkbox" className="custom-control-input" id="hide-empty-server"
                                       checked={hideEmptyServer} onChange={handleChangeHideEmpty}
                                />
                                <label className="custom-control-label" htmlFor="hide-empty-server">
                                    {t('filter-option.hide-empty')}
                                </label>
                            </div>

                            <div className="custom-control custom-switch mt-1">
                                <input type="checkbox" className="custom-control-input" id="hide-full-server"
                                       checked={hideFullServer} onChange={handleChangeHideFull}
                                />
                                <label className="custom-control-label" htmlFor="hide-full-server">
                                    {t('filter-option.hide-full')}
                                </label>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 mt-sm-3"/>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-sm-3" style={{textAlign: 'right'}}>
                            <button className="btn btn-info"
                                    type="button"
                                    onClick={updateServerList}
                                    disabled={serverListFetching}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowsRotate}/> {t(`filter-option.${serverListFetching ? 'refreshing' : 'refresh-btn'}`)}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mt-sm-3" id="search-filter">
                    <div className="yes-no-filter col-12">
                        <YesNoFilter
                            title={t('filter-option.yes-no-filter.friendly-fire')}

                            value={friendlyFire}
                            onChange={handleChangeFriendlyFire}
                        />
                    </div>

                    <div className="yes-no-filter col-12 mt-2">
                        <YesNoFilter
                            title={t('filter-option.yes-no-filter.whitelist')}

                            value={whitelist}
                            onChange={handleChangeWhitelist}
                        />
                    </div>

                    <div className="yes-no-filter col-12 mt-2">
                        <YesNoFilter
                            title={t('filter-option.yes-no-filter.modded')}

                            value={modded}
                            onChange={handleChangeModded}
                        />
                    </div>

                    <div className="yes-no-filter col-12 mt-2">
                        <SortType
                            value={sort}
                            onChange={handleChangeSortType}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(
    (state) => ({
        serverListFetching: state.serverList.fetching,
        searchFilter: state.serverFilter.searchFilter,
        countryFilter: state.serverFilter.countryFilter,
        hideEmptyServer: state.serverFilter.hideEmptyServer,
        hideFullServer: state.serverFilter.hideFullServer,
        friendlyFire: state.serverFilter.friendlyFire,
        whitelist: state.serverFilter.whitelist,
        modded: state.serverFilter.modded,
        sort: state.serverFilter.sort
    }),
    (dispatch) => ({
        ServerFilterActions: bindActionCreators(serverFilterActions, dispatch),
        ServerListActions: bindActionCreators(serverListActions, dispatch)
    })
)(ServerFilter);