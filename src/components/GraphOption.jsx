import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Button, Col, Row} from "react-bootstrap";
import PeriodSelect from "./PeriodSelect";
import ResolutionSelect from "./ResolutionSelect";
import DateTimeSelect from "./datetime-select/DateTimeSelect";
import {GRAPH_DATA_START_TIME} from "../dateFactory";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";

const SECONDS_1_HOUR = 60 * 60;
const SECONDS_8_HOURS = 8 * SECONDS_1_HOUR;
const SECONDS_1_DAY = 24 * SECONDS_1_HOUR;
const SECONDS_2_DAYS = 2 * SECONDS_1_DAY;
const SECONDS_1_WEEK = 7 * SECONDS_1_DAY;
const SECONDS_1_MONTH = 30 * SECONDS_1_DAY;
const SECONDS_3_MONTHS = 3 * SECONDS_1_MONTH;
const SECONDS_1_YEAR = 12 * SECONDS_1_MONTH;
const SECONDS_4_YEARS = 4 * SECONDS_1_YEAR;

const GraphOption = (
    {
        onUpdate,
    }
) => {
    const {t} = useTranslation();
    const [period, setPeriod] = useState('1week');
    const [startTime, setStartTime] = useState(GRAPH_DATA_START_TIME);
    const [stopTime, setStopTime] = useState(new Date());
    const [resolution, setResolution] = useState('1m');
    const [availableResolutions, setAvailableResolutions] = useState([]);

    useEffect(() => {
        if (period === 'custom') {
            setStartTime(GRAPH_DATA_START_TIME);
            setStopTime(new Date());
        }
    }, [period])

    useEffect(() => {
        const durationSecond = getDurationSecond(period);
        const resolutions = ['1d'];

        if (durationSecond <= SECONDS_3_MONTHS) {
            resolutions.unshift('1h')
        }
        if (durationSecond <= SECONDS_1_WEEK) {
            resolutions.unshift('5m')
        }
        if (durationSecond <= SECONDS_8_HOURS) {
            resolutions.unshift('1m')
        }
        setAvailableResolutions(resolutions);

        if (!resolutions.includes(resolution)) {
            setResolution(resolutions[0])
        }
    }, [period, startTime, stopTime])

    const getDurationSecond = () => {
        if (period === 'custom') {
            return (stopTime.getTime() - startTime.getTime()) / 1000;
        } else if (period === '1hour') {
            return SECONDS_1_HOUR
        } else if (period === '8hour') {
            return SECONDS_8_HOURS
        } else if (period === '1day') {
            return SECONDS_1_DAY
        } else if (period === '2day') {
            return SECONDS_2_DAYS
        } else if (period === '1week') {
            return SECONDS_1_WEEK
        } else if (period === '1month') {
            return SECONDS_1_MONTH
        } else if (period === '3month') {
            return SECONDS_3_MONTHS
        } else if (period === '1year') {
            return SECONDS_1_YEAR
        } else if (period === '4year') {
            return SECONDS_4_YEARS
        }

        return 0;
    }

    const handleChangeStartTime = (time) => {
        if (!isValidTimeRange(time, stopTime)) {
            toast.warn(t('server-info.graph.options.invalid-start-time'));
            setStartTime(GRAPH_DATA_START_TIME);
            return;
        }

        setStartTime(time);
    }

    const handleChangeStopTime = (time) => {
        if (!isValidTimeRange(startTime, time)) {
            toast.warn(t('server-info.graph.options.invalid-stop-time'));
            setStopTime(new Date());
            return;
        }

        setStopTime(time);
    }

    const isValidTimeRange = (startTime, stopTime) => {
        return startTime.getTime() < stopTime.getTime();
    }

    const getOptionParams = () => {
        const optionParams = {
            aggregateEvery: resolution,
        }

        if (period === 'custom') {
            return {
                ...optionParams,
                startTime: localTimeToUtcText(startTime),
                stopTime: localTimeToUtcText(stopTime),
            }
        } else {
            const durationSecond = getDurationSecond();

            return {
                ...optionParams,
                startTime: `-${durationSecond}s`,
            }
        }
    }

    const localTimeToUtcText = (localTime) => {
        return localTime.toISOString();
    }

    const handleUpdateGraph = () => {
        onUpdate(getOptionParams());
    }

    return (
        <>
            <Row className="justify-content-sm-center">
                <Col lg={2} md={6} sm={16}>
                    <p className="text-center mb-0">{t('server-info.graph.options.data-range')}</p>
                    <PeriodSelect value={period} onChange={setPeriod}/>
                </Col>
                {period === 'custom' && <>
                    <Col lg={4} md={6} sm={16}>
                        <p className="text-center mb-0">{t('server-info.graph.options.start-time')}</p>
                        <DateTimeSelect value={startTime} onChange={handleChangeStartTime}/>
                    </Col>
                    <Col lg={4} md={6} sm={16}>
                        <p className="text-center mb-0">{t('server-info.graph.options.stop-time')}</p>
                        <DateTimeSelect value={stopTime} onChange={handleChangeStopTime}/>
                    </Col>
                </>}
                <Col lg={2} md={6} sm={16}>
                    <p className="text-center mb-0">{t('server-info.graph.options.data-resolution')}</p>
                    <ResolutionSelect value={resolution} onChange={setResolution}
                                      availableValues={availableResolutions}/>
                </Col>
            </Row>

            <Row className="mt-3 mb-3">
                <Col sm={12} className="text-center">
                    <Button variant="success" onClick={handleUpdateGraph}>
                        <FontAwesomeIcon icon={faArrowsRotate}/> {t('server-info.graph.options.graph-update-btn')}
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default GraphOption;
